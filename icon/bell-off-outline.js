(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.bellOffOutline=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M22.11 21.46L2.39 1.73 1.11 3l4.72 4.72A7 7 0 0 0 5 11v6l-2 2v1h15.11l2.73 2.73 1.27-1.27zM7 18v-7a4.73 4.73 0 0 1 .34-1.77L16.11 18H7zm3 3h4a2 2 0 1 1-4 0zM8.29 5.09a6.87 6.87 0 0 1 1.71-.8A2.85 2.85 0 0 1 10 4a2 2 0 1 1 4 0c.005.097.005.193 0 .29A7 7 0 0 1 19 11v4.8l-2-2V11a5 5 0 0 0-5-5 4.83 4.83 0 0 0-2.24.56L8.29 5.09z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__bell-off-outline '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});