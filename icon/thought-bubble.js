(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.thoughtBubble=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path fill="#84BC00" d="M3.5 19a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5-3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm6-1a3.99 3.99 0 0 1-3-1.354 4.001 4.001 0 0 1-6.932-1.91 4.002 4.002 0 0 1 2.204-7.662A3.986 3.986 0 0 1 9.5 3a3.99 3.99 0 0 1 3 1.354 4.001 4.001 0 0 1 6.933 1.91A4.002 4.002 0 0 1 18 14l-.772-.075A3.986 3.986 0 0 1 14.5 15z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__thought-bubble '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});