import{g as s}from"./getTransitionDurationFromElement-Cpu4p4hx.js";import{S as u}from"./index-DtMJePn8.js";var a=function(e){typeof e=="function"&&e()},g=function(e){e.dispatchEvent(new Event("transitionend"))},m=function(e,t,r){if(r===void 0&&(r=!0),!r){a(e);return}var f=5,o=s(t)+f,n=!1,i=function(d){var v=d.target;v===t&&(n=!0,t.removeEventListener("transitionend",i),a(e))};t.addEventListener("transitionend",i),setTimeout(function(){n||g(t)},o)},p=function(e,t){switch(e){case"right":return u(t)?"left":"right";case"left":return u(t)?"right":"left";default:return e}};export{m as e,p as g};
