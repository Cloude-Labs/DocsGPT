import os
import datetime
from flask import Blueprint, request, send_from_directory
from pymongo import MongoClient
from werkzeug.utils import secure_filename


from application.core.settings import settings

mongo = MongoClient(settings.MONGO_URI)
db = mongo["docsgpt"]
conversations_collection = db["conversations"]
vectors_collection = db["vectors"]

current_dir = os.path.dirname(
    os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
)


internal = Blueprint("internal", __name__)


@internal.route("/api/download", methods=["get"])
def download_file():
    user = secure_filename(request.args.get("user"))
    job_name = secure_filename(request.args.get("name"))
    filename = secure_filename(request.args.get("file"))
    save_dir = os.path.join(current_dir, settings.UPLOAD_FOLDER, user, job_name)
    return send_from_directory(save_dir, filename, as_attachment=True)


@internal.route("/api/upload_index", methods=["POST"])
def upload_index_files():
    """Upload two files(index.faiss, index.pkl) to the user's folder."""
    if "user" not in request.form:
        return {"status": "no user"}
    user = secure_filename(request.form["user"])
    if "name" not in request.form:
        return {"status": "no name"}
    job_name = secure_filename(request.form["name"])
    tokens = secure_filename(request.form["tokens"])
    source_type = request.form.get("source_type")
    source_data = request.form.get("source_data")
    sync_frequency = request.form.get("sync_frequency")
    save_dir = os.path.join(current_dir, "indexes", user, job_name)
    if settings.VECTOR_STORE == "faiss":
        if "file_faiss" not in request.files:
            print("No file part")
            return {"status": "no file"}
        file_faiss = request.files["file_faiss"]
        if file_faiss.filename == "":
            return {"status": "no file name"}
        if "file_pkl" not in request.files:
            print("No file part")
            return {"status": "no file"}
        file_pkl = request.files["file_pkl"]
        if file_pkl.filename == "":
            return {"status": "no file name"}
        # saves index files

        if not os.path.exists(save_dir):
            os.makedirs(save_dir)
        file_faiss.save(os.path.join(save_dir, "index.faiss"))
        file_pkl.save(os.path.join(save_dir, "index.pkl"))
    # create entry in vectors_collection
    update_dict = {
        "location": save_dir,
        "date": datetime.datetime.now(),
        "model": settings.EMBEDDINGS_NAME,
        "type": "local",
        "tokens": tokens,
    }
    if source_type is not None and source_data is not None:
        update_dict["source"] = {"type": source_type, "data": source_data}
    if sync_frequency is not None:
        update_dict["sync_frequency"] = sync_frequency
    vectors_collection.update_one(
        {
            "user": user,
            "name": job_name,
            "language": job_name,
        },
        {"$set": update_dict},
        upsert=True,
    )
    return {"status": "ok"}
