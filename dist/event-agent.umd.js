(function(n,i){typeof exports=="object"&&typeof module!="undefined"?i(exports):typeof define=="function"&&define.amd?define(["exports"],i):(n=typeof globalThis!="undefined"?globalThis:n||self,i(n["event-agent"]={}))})(this,function(n){"use strict";const i=function(e){let o={};for(let r=0;r<e.length;r++){let a=e[r],t={key:a.name,value:a.value};o[t.key]=t.value}return o};let f=function(e){return e.target||(e.target=e.srcElement,e.pageX=e.x,e.pageY=e.y),/mouseover/i.test(e.type)&&!e.relatedTarget?e.relatedTarget=e.fromElement:/mouseout/i.test(e.type)&&!e.relatedTarget&&(e.relatedTarget=e.toElement),e};const d=(e,o)=>{const r=f(e),a=r.currentTarget;let t=r.target,l,u,s;for(;t&&t!==a;){if(l=t.getAttribute("event-agent")||"",l=l.trim().toLowerCase().split(","),l.indexOf(r.type.toLowerCase())!==-1){s=i(t.attributes),u=!0;break}t=t.parentNode}u&&o&&o(t,s)};n.eventAgent=d,n.getAttrKeys=i,Object.defineProperty(n,"__esModule",{value:!0}),n[Symbol.toStringTag]="Module"});
