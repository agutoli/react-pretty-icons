(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.cloudOffOutline=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M7.727 9.998l8 8H6a4 4 0 0 1 0-8M3 5.271l2.75 2.74C2.558 8.148 0 10.772 0 13.998a6 6 0 0 0 6 6h11.727l2 2L21 20.726 4.273 3.998m15.082 6.036a7.5 7.5 0 0 0-7.356-6.036c-1.476 0-2.85.434-4.01 1.172l1.463 1.462a5.454 5.454 0 0 1 2.547-.634 5.5 5.5 0 0 1 5.5 5.5v.5H19a3 3 0 0 1 3 3 2.987 2.987 0 0 1-1.563 2.618l1.452 1.452A4.983 4.983 0 0 0 24 14.998c0-2.64-2.051-4.779-4.644-4.964z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__cloud-off-outline '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});