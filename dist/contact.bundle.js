!function(e){var t={};function n(a){if(t[a])return t[a].exports;var c=t[a]={i:a,l:!1,exports:{}};return e[a].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(a,c,function(t){return e[t]}.bind(null,c));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}({2:function(e,t,n){"use strict";n.r(t);const a=(()=>{const e=document.getElementById("content");return{contactRender:()=>{[...document.getElementsByClassName("nav-link")].forEach(e=>{e.className=e.className.replace("active","")}),document.getElementById("contact").classList.add("active");const t=document.getElementById("container");t&&t.parentNode.removeChild(t);const n=document.createElement("div");n.setAttribute("id","container");const a=document.createElement("div");a.classList.add("d-flex","flex-column","justify-content-center","home-description","contact-details");const c=document.createElement("div"),r=document.createElement("div");c.classList.add("d-flex","align-items-baseline"),r.classList.add("d-flex","align-items-baseline");const o=document.createElement("i"),s=document.createElement("i");o.classList.add("fas","fa-phone-square"),s.classList.add("fas","fa-envelope");const d=document.createElement("p"),i=document.createElement("p");d.innerHTML="877-956-2857",i.innerHTML="customerservice@sushiroyal.com",d.classList.add("contact-paragraph"),i.classList.add("contact-paragraph"),c.append(o,d),r.append(s,i),a.append(c,r);const l=document.createElement("img");l.setAttribute("src","../assets/images/map.png"),l.classList.add("map"),n.append(a,l),e.appendChild(n)}}})();t.default=a}});