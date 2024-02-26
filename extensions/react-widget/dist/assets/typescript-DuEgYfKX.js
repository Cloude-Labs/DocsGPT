import{g as v}from"./index-TA8jW4qE.js";function x(e,i){for(var n=0;n<i.length;n++){const s=i[n];if(typeof s!="string"&&!Array.isArray(s)){for(const a in s)if(a!=="default"&&!(a in e)){const r=Object.getOwnPropertyDescriptor(s,a);r&&Object.defineProperty(e,a,r.get?r:{enumerable:!0,get:()=>s[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}const N="[A-Za-z$_][0-9A-Za-z$_]*",M=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],C=["true","false","null","undefined","NaN","Infinity"],L=["Intl","DataView","Number","Math","Date","String","RegExp","Object","Function","Boolean","Error","Symbol","Set","Map","WeakSet","WeakMap","Proxy","Reflect","JSON","Promise","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Float32Array","Array","Uint8Array","Uint8ClampedArray","ArrayBuffer","BigInt64Array","BigUint64Array","BigInt"],B=["EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],P=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],U=["arguments","this","super","console","window","document","localStorage","module","global"],D=[].concat(P,U,L,B);function $(e){return e?typeof e=="string"?e:e.source:null}function I(e){return m("(?=",e,")")}function m(...e){return e.map(n=>$(n)).join("")}function k(e){const i=(o,{after:p})=>{const S="</"+o[0].slice(1);return o.input.indexOf(S,p)!==-1},n=N,s={begin:"<>",end:"</>"},a={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(o,p)=>{const S=o[0].length+o.index,A=o.input[S];if(A==="<"){p.ignoreMatch();return}A===">"&&(i(o,{after:S})||p.ignoreMatch())}},r={$pattern:N,keyword:M,literal:C,built_in:D},b="[0-9](_?[0-9])*",l=`\\.(${b})`,d="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",E={className:"number",variants:[{begin:`(\\b(${d})((${l})|\\.)?|(${l}))[eE][+-]?(${b})\\b`},{begin:`\\b(${d})\\b((${l})\\b|\\.)?|(${l})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},t={className:"subst",begin:"\\$\\{",end:"\\}",keywords:r,contains:[]},u={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,t],subLanguage:"xml"}},c={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,t],subLanguage:"css"}},_={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,t]},g={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+",contains:[{className:"type",begin:"\\{",end:"\\}",relevance:0},{className:"variable",begin:n+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},f=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,u,c,_,E,e.REGEXP_MODE];t.contains=f.concat({begin:/\{/,end:/\}/,keywords:r,contains:["self"].concat(f)});const R=[].concat(g,t.contains),y=R.concat([{begin:/\(/,end:/\)/,keywords:r,contains:["self"].concat(R)}]),T={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:r,contains:y};return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:r,exports:{PARAMS_CONTAINS:y},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),{label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,u,c,_,g,E,{begin:m(/[{,\n]\s*/,I(m(/(((\/\/.*$)|(\/\*(\*[^/]|[^*])*\*\/))\s*)*/,n+"\\s*:"))),relevance:0,contains:[{className:"attr",begin:n+I("\\s*:"),relevance:0}]},{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[g,e.REGEXP_MODE,{className:"function",begin:"(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:r,contains:y}]}]},{begin:/,/,relevance:0},{className:"",begin:/\s/,end:/\s*/,skip:!0},{variants:[{begin:s.begin,end:s.end},{begin:a.begin,"on:begin":a.isTrulyOpeningTag,end:a.end}],subLanguage:"xml",contains:[{begin:a.begin,end:a.end,skip:!0,contains:["self"]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/[{;]/,excludeEnd:!0,keywords:r,contains:["self",e.inherit(e.TITLE_MODE,{begin:n}),T],illegal:/%/},{beginKeywords:"while if switch catch for"},{className:"function",begin:e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,contains:[T,e.inherit(e.TITLE_MODE,{begin:n})]},{variants:[{begin:"\\."+n},{begin:"\\$"+n}],relevance:0},{className:"class",beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"[\]]/,contains:[{beginKeywords:"extends"},e.UNDERSCORE_TITLE_MODE]},{begin:/\b(?=constructor)/,end:/[{;]/,excludeEnd:!0,contains:[e.inherit(e.TITLE_MODE,{begin:n}),"self",T]},{begin:"(get|set)\\s+(?="+n+"\\()",end:/\{/,keywords:"get set",contains:[e.inherit(e.TITLE_MODE,{begin:n}),{begin:/\(\)/},T]},{begin:/\$[(.]/}]}}function K(e){const i=N,n={beginKeywords:"namespace",end:/\{/,excludeEnd:!0},s={beginKeywords:"interface",end:/\{/,excludeEnd:!0,keywords:"interface extends"},a={className:"meta",relevance:10,begin:/^\s*['"]use strict['"]/},r=["any","void","number","boolean","string","object","never","enum"],b=["type","namespace","typedef","interface","public","private","protected","implements","declare","abstract","readonly"],l={$pattern:N,keyword:M.concat(b),literal:C,built_in:D.concat(r)},d={className:"meta",begin:"@"+i},E=(c,_,O)=>{const g=c.contains.findIndex(f=>f.label===_);if(g===-1)throw new Error("can not find mode to replace");c.contains.splice(g,1,O)},t=k(e);Object.assign(t.keywords,l),t.exports.PARAMS_CONTAINS.push(d),t.contains=t.contains.concat([d,n,s]),E(t,"shebang",e.SHEBANG()),E(t,"use_strict",a);const u=t.contains.find(c=>c.className==="function");return u.relevance=0,Object.assign(t,{name:"TypeScript",aliases:["ts","tsx"]}),t}var w=K;const G=v(w),z=x({__proto__:null,default:G},[w]);export{z as t};
