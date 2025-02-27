import pymongo
import os
import shutil
import logging
from tqdm import tqdm

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger()

# Configuration
MONGO_URI = "mongodb://localhost:27017/"
MONGO_ATLAS_URI = "mongodb+srv://<username>:<password>@<cluster>/<dbname>?retryWrites=true&w=majority"
DB_NAME = "docsgpt"

def get_db_connection(uri):
    """Creates and returns a database connection."""
    try:
        client = pymongo.MongoClient(uri, serverSelectionTimeoutMS=5000)
        client.server_info()  # Trigger connection check
        logger.info("Connected to MongoDB successfully.")
        return client
    except pymongo.errors.ServerSelectionTimeoutError as e:
        logger.error(f"MongoDB connection failed: {e}")
        return None

def backup_collection(db, collection_name):
    """Backups a collection before migration."""
    try:
        backup_collection_name = f"{collection_name}_backup"
        logger.info(f"Backing up collection {collection_name} to {backup_collection_name}")
        db[collection_name].aggregate([{"$out": backup_collection_name}])
        logger.info("Backup completed")
    except Exception as e:
        logger.error(f"Error during backup: {e}")

def migrate_to_v1_vectorstore_mongo():
    """Migrates MongoDB to v1 vector store."""
    client = get_db_connection(MONGO_URI)
    if not client:
        return

    db = client[DB_NAME]
    vectors_collection = db["vectors"]
    sources_collection = db["sources"]

    backup_collection(db, "vectors")
    backup_collection(db, "sources")

    try:
        vectors = list(vectors_collection.find())
        for vector in tqdm(vectors, desc="Updating vectors"):
            vector.pop("location", None)
            vector.setdefault("retriever", "classic")
            vector.setdefault("remote_data", None)
            vectors_collection.update_one({"_id": vector["_id"]}, {"$set": vector})

        for vector in tqdm(vectors, desc="Moving to sources"):
            sources_collection.insert_one(vector)

        vectors_collection.drop()
        logger.info("Migration completed")
    except Exception as e:
        logger.error(f"Migration failed: {e}")
    finally:
        client.close()

def migrate_faiss_to_v1_vectorstore():
    """Migrates FAISS vector store data to new path format."""
    client = get_db_connection(MONGO_URI)
    if not client:
        return

    db = client[DB_NAME]
    vectors_collection = db["vectors"]

    try:
        vectors = list(vectors_collection.find())
        for vector in tqdm(vectors, desc="Migrating FAISS vectors"):
            old_path = f"./application/indexes/{vector['user']}/{vector['name']}"
            new_path = f"./application/indexes/{vector['_id']}"
            if os.path.exists(old_path):
                os.makedirs(os.path.dirname(new_path), exist_ok=True)
                shutil.move(old_path, new_path)
            else:
                logger.warning(f"Path not found: {old_path}")

        logger.info("FAISS migration completed")
    except Exception as e:
        logger.error(f"FAISS migration failed: {e}")
    finally:
        client.close()

def migrate_mongo_atlas_vector_to_v1_vectorstore():
    """Migrates MongoDB Atlas vector store to v1 format."""
    client = get_db_connection(MONGO_ATLAS_URI)
    if not client:
        return

    db = client[DB_NAME]
    vectors_collection = db["vectors"]
    documents_collection = db["documents"]

    backup_collection(db, "vectors")
    backup_collection(db, "documents")

    try:
        vectors = list(vectors_collection.find())
        for vector in tqdm(vectors, desc="Updating Mongo Atlas vectors"):
            documents_collection.update_many(
                {"store": f"{vector['user']}/{vector['name']}"},
                {"$set": {"source_id": str(vector["_id"])}}
            )

        logger.info("Mongo Atlas migration completed")
    except Exception as e:
        logger.error(f"Mongo Atlas migration failed: {e}")
    finally:
        client.close()

if __name__ == "__main__":
    migrate_faiss_to_v1_vectorstore()
    migrate_to_v1_vectorstore_mongo()
    migrate_mongo_atlas_vector_to_v1_vectorstore()
