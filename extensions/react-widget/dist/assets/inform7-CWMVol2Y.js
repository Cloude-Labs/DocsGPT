import{g as i}from"./index-TA8jW4qE.js";function c(t,n){for(var e=0;e<n.length;e++){const o=n[e];if(typeof o!="string"&&!Array.isArray(o)){for(const r in o)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(o,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>o[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}function f(t){const n="\\[",e="\\]";return{name:"Inform 7",aliases:["i7"],case_insensitive:!0,keywords:{keyword:"thing room person man woman animal container supporter backdrop door scenery open closed locked inside gender is are say understand kind of rule"},contains:[{className:"string",begin:'"',end:'"',relevance:0,contains:[{className:"subst",begin:n,end:e}]},{className:"section",begin:/^(Volume|Book|Part|Chapter|Section|Table)\b/,end:"$"},{begin:/^(Check|Carry out|Report|Instead of|To|Rule|When|Before|After)\b/,end:":",contains:[{begin:"\\(This",end:"\\)"}]},{className:"comment",begin:n,end:e,contains:["self"]}]}}var a=f;const l=i(a),m=c({__proto__:null,default:l},[a]);export{m as i};
