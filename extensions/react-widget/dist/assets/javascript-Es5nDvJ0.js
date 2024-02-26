import{g as M}from"./index-TA8jW4qE.js";function v(e,i){for(var n=0;n<i.length;n++){const r=i[n];if(typeof r!="string"&&!Array.isArray(r)){for(const t in r)if(t!=="default"&&!(t in e)){const a=Object.getOwnPropertyDescriptor(r,t);a&&Object.defineProperty(e,t,a.get?a:{enumerable:!0,get:()=>r[t]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}const p="[A-Za-z$_][0-9A-Za-z$_]*",D=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],C=["true","false","null","undefined","NaN","Infinity"],w=["Intl","DataView","Number","Math","Date","String","RegExp","Object","Function","Boolean","Error","Symbol","Set","Map","WeakSet","WeakMap","Proxy","Reflect","JSON","Promise","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Float32Array","Array","Uint8Array","Uint8ClampedArray","ArrayBuffer","BigInt64Array","BigUint64Array","BigInt"],L=["EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],x=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],B=["arguments","this","super","console","window","document","localStorage","module","global"],U=[].concat(x,B,w,L);function $(e){return e?typeof e=="string"?e:e.source:null}function R(e){return _("(?=",e,")")}function _(...e){return e.map(n=>$(n)).join("")}function P(e){const i=(s,{after:l})=>{const b="</"+s[0].slice(1);return s.input.indexOf(b,l)!==-1},n=p,r={begin:"<>",end:"</>"},t={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(s,l)=>{const b=s[0].length+s.index,d=s.input[b];if(d==="<"){l.ignoreMatch();return}d===">"&&(i(s,{after:b})||l.ignoreMatch())}},a={$pattern:p,keyword:D,literal:C,built_in:U},T="[0-9](_?[0-9])*",c=`\\.(${T})`,f="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",N={className:"number",variants:[{begin:`(\\b(${f})((${c})|\\.)?|(${c}))[eE][+-]?(${T})\\b`},{begin:`\\b(${f})\\b((${c})\\b|\\.)?|(${c})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},o={className:"subst",begin:"\\$\\{",end:"\\}",keywords:a,contains:[]},S={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,o],subLanguage:"xml"}},A={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,o],subLanguage:"css"}},y={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,o]},E={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+",contains:[{className:"type",begin:"\\{",end:"\\}",relevance:0},{className:"variable",begin:n+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},m=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,S,A,y,N,e.REGEXP_MODE];o.contains=m.concat({begin:/\{/,end:/\}/,keywords:a,contains:["self"].concat(m)});const O=[].concat(E,o.contains),u=O.concat([{begin:/\(/,end:/\)/,keywords:a,contains:["self"].concat(O)}]),g={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:a,contains:u};return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:a,exports:{PARAMS_CONTAINS:u},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),{label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,S,A,y,E,N,{begin:_(/[{,\n]\s*/,R(_(/(((\/\/.*$)|(\/\*(\*[^/]|[^*])*\*\/))\s*)*/,n+"\\s*:"))),relevance:0,contains:[{className:"attr",begin:n+R("\\s*:"),relevance:0}]},{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[E,e.REGEXP_MODE,{className:"function",begin:"(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:a,contains:u}]}]},{begin:/,/,relevance:0},{className:"",begin:/\s/,end:/\s*/,skip:!0},{variants:[{begin:r.begin,end:r.end},{begin:t.begin,"on:begin":t.isTrulyOpeningTag,end:t.end}],subLanguage:"xml",contains:[{begin:t.begin,end:t.end,skip:!0,contains:["self"]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/[{;]/,excludeEnd:!0,keywords:a,contains:["self",e.inherit(e.TITLE_MODE,{begin:n}),g],illegal:/%/},{beginKeywords:"while if switch catch for"},{className:"function",begin:e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,contains:[g,e.inherit(e.TITLE_MODE,{begin:n})]},{variants:[{begin:"\\."+n},{begin:"\\$"+n}],relevance:0},{className:"class",beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"[\]]/,contains:[{beginKeywords:"extends"},e.UNDERSCORE_TITLE_MODE]},{begin:/\b(?=constructor)/,end:/[{;]/,excludeEnd:!0,contains:[e.inherit(e.TITLE_MODE,{begin:n}),"self",g]},{begin:"(get|set)\\s+(?="+n+"\\()",end:/\{/,keywords:"get set",contains:[e.inherit(e.TITLE_MODE,{begin:n}),{begin:/\(\)/},g]},{begin:/\$[(.]/}]}}var I=P;const k=M(I),F=v({__proto__:null,default:k},[I]);export{F as j};
