import{g as i}from"./index-TA8jW4qE.js";function c(e,a){for(var n=0;n<a.length;n++){const t=a[n];if(typeof t!="string"&&!Array.isArray(t)){for(const r in t)if(r!=="default"&&!(r in e)){const o=Object.getOwnPropertyDescriptor(t,r);o&&Object.defineProperty(e,r,o.get?o:{enumerable:!0,get:()=>t[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}function _(e){return{name:"Backus–Naur Form",contains:[{className:"attribute",begin:/</,end:/>/},{begin:/::=/,end:/$/,contains:[{begin:/</,end:/>/},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]}]}}var f=_;const b=i(f),u=c({__proto__:null,default:b},[f]);export{u as b};
