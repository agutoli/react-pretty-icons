(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.airballoon=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M11 23a2 2 0 0 1-2-2v-2h6v2a2 2 0 0 1-2 2h-2zm1-22c.707 0 1.392.092 2.045.264C15.215 2.834 16 5.71 16 9c0 2.283-.378 4.367-1 7a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2c-.622-2.633-1-4.717-1-7 0-3.29.784-6.166 1.955-7.736A8.012 8.012 0 0 1 12 1zm8 7c0 3.178-1.853 7.923-4.537 9.214C16.41 15.394 17 11.834 17 9c0-2.835-.59-5.394-1.537-7.214C18.147 3.077 20 4.822 20 8zM4 8c0-3.178 1.853-4.923 4.537-6.214C7.59 3.606 7 6.166 7 9c0 2.835.59 6.394 1.537 8.214C5.853 15.923 4 11.178 4 8z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__airballoon '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});