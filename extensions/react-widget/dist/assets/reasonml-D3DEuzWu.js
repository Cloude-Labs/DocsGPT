import{g as A}from"./index-TA8jW4qE.js";function y(a,c){for(var n=0;n<c.length;n++){const e=c[n];if(typeof e!="string"&&!Array.isArray(e)){for(const t in e)if(t!=="default"&&!(t in a)){const r=Object.getOwnPropertyDescriptor(e,t);r&&Object.defineProperty(a,t,r.get?r:{enumerable:!0,get:()=>e[t]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}function D(a){function c(M){return M.map(function(T){return T.split("").map(function(p){return"\\"+p}).join("")}).join("|")}const n="~?[a-z$_][0-9a-zA-Z$_]*",e="`?[A-Z$_][0-9a-zA-Z$_]*",t="'?[a-z$_][0-9a-z$_]*",r="\\s*:\\s*[a-z$_][0-9a-z$_]*(\\(\\s*("+t+"\\s*(,"+t+"\\s*)*)?\\))?",O=n+"("+r+"){0,2}",u="("+c(["||","++","**","+.","*","/","*.","/.","..."])+"|\\|>|&&|==|===)",f="\\s+"+u+"\\s+",s={keyword:"and as asr assert begin class constraint do done downto else end exception external for fun function functor if in include inherit initializer land lazy let lor lsl lsr lxor match method mod module mutable new nonrec object of open or private rec sig struct then to try type val virtual when while with",built_in:"array bool bytes char exn|5 float int int32 int64 list lazy_t|5 nativeint|5 ref string unit ",literal:"true false"},g="\\b(0[xX][a-fA-F0-9_]+[Lln]?|0[oO][0-7_]+[Lln]?|0[bB][01_]+[Lln]?|[0-9][0-9_]*([Lln]|(\\.[0-9_]*)?([eE][-+]?[0-9_]+)?)?)",_={className:"number",relevance:0,variants:[{begin:g},{begin:"\\(-"+g+"\\)"}]},i={className:"operator",relevance:0,begin:u},b=[{className:"identifier",relevance:0,begin:n},i,_],o=[a.QUOTE_STRING_MODE,i,{className:"module",begin:"\\b"+e,returnBegin:!0,end:".",contains:[{className:"identifier",begin:e,relevance:0}]}],m=[{className:"module",begin:"\\b"+e,returnBegin:!0,end:".",relevance:0,contains:[{className:"identifier",begin:e,relevance:0}]}],v={begin:n,end:"(,|\\n|\\))",relevance:0,contains:[i,{className:"typing",begin:":",end:"(,|\\n)",returnBegin:!0,relevance:0,contains:m}]},l={className:"function",relevance:0,keywords:s,variants:[{begin:"\\s(\\(\\.?.*?\\)|"+n+")\\s*=>",end:"\\s*=>",returnBegin:!0,relevance:0,contains:[{className:"params",variants:[{begin:n},{begin:O},{begin:/\(\s*\)/}]}]},{begin:"\\s\\(\\.?[^;\\|]*\\)\\s*=>",end:"\\s=>",returnBegin:!0,relevance:0,contains:[{className:"params",relevance:0,variants:[v]}]},{begin:"\\(\\.\\s"+n+"\\)\\s*=>"}]};o.push(l);const d={className:"constructor",begin:e+"\\(",end:"\\)",illegal:"\\n",keywords:s,contains:[a.QUOTE_STRING_MODE,i,{className:"params",begin:"\\b"+n}]},R={className:"pattern-match",begin:"\\|",returnBegin:!0,keywords:s,end:"=>",relevance:0,contains:[d,i,{relevance:0,className:"constructor",begin:e}]},E={className:"module-access",keywords:s,returnBegin:!0,variants:[{begin:"\\b("+e+"\\.)+"+n},{begin:"\\b("+e+"\\.)+\\(",end:"\\)",returnBegin:!0,contains:[l,{begin:"\\(",end:"\\)",skip:!0}].concat(o)},{begin:"\\b("+e+"\\.)+\\{",end:/\}/}],contains:o};return m.push(E),{name:"ReasonML",aliases:["re"],keywords:s,illegal:"(:-|:=|\\$\\{|\\+=)",contains:[a.COMMENT("/\\*","\\*/",{illegal:"^(#,\\/\\/)"}),{className:"character",begin:"'(\\\\[^']+|[^'])'",illegal:"\\n",relevance:0},a.QUOTE_STRING_MODE,{className:"literal",begin:"\\(\\)",relevance:0},{className:"literal",begin:"\\[\\|",end:"\\|\\]",relevance:0,contains:b},{className:"literal",begin:"\\[",end:"\\]",relevance:0,contains:b},d,{className:"operator",begin:f,illegal:"-->",relevance:0},_,a.C_LINE_COMMENT_MODE,R,l,{className:"module-def",begin:"\\bmodule\\s+"+n+"\\s+"+e+"\\s+=\\s+\\{",end:/\}/,returnBegin:!0,keywords:s,relevance:0,contains:[{className:"module",relevance:0,begin:e},{begin:/\{/,end:/\}/,skip:!0}].concat(o)},E]}}var N=D;const S=A(N),P=y({__proto__:null,default:S},[N]);export{P as r};
