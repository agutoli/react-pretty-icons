(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.mouseVariant=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M14 7h-4V2.1c2.282.463 4 2.481 4 4.9zM4 7a5.002 5.002 0 0 1 4-4.9V7H4zm10 5a5.002 5.002 0 0 1-4 4.9V18a3 3 0 1 0 6 0v-5a4 4 0 0 1 4-4h2l-1 1 1 1h-2a2 2 0 0 0-2 2v5a5 5 0 0 1-10 0v-1.1A5.002 5.002 0 0 1 4 12V9h10v3z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__mouse-variant '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});