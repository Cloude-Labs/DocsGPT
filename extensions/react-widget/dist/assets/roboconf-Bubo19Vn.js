import{g as c}from"./index-TA8jW4qE.js";function i(e,t){for(var n=0;n<t.length;n++){const o=t[n];if(typeof o!="string"&&!Array.isArray(o)){for(const a in o)if(a!=="default"&&!(a in e)){const r=Object.getOwnPropertyDescriptor(o,a);r&&Object.defineProperty(e,a,r.get?r:{enumerable:!0,get:()=>o[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}function f(e){const t="[a-zA-Z-_][^\\n{]+\\{",n={className:"attribute",begin:/[a-zA-Z-_]+/,end:/\s*:/,excludeEnd:!0,starts:{end:";",relevance:0,contains:[{className:"variable",begin:/\.[a-zA-Z-_]+/},{className:"keyword",begin:/\(optional\)/}]}};return{name:"Roboconf",aliases:["graph","instances"],case_insensitive:!0,keywords:"import",contains:[{begin:"^facet "+t,end:/\}/,keywords:"facet",contains:[n,e.HASH_COMMENT_MODE]},{begin:"^\\s*instance of "+t,end:/\}/,keywords:"name count channels instance-data instance-state instance of",illegal:/\S/,contains:["self",n,e.HASH_COMMENT_MODE]},{begin:"^"+t,end:/\}/,contains:[n,e.HASH_COMMENT_MODE]},e.HASH_COMMENT_MODE]}}var s=f;const l=c(s),d=i({__proto__:null,default:l},[s]);export{d as r};
