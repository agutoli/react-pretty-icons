(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.web=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M16.36 13.998c.083-.657.14-1.32.14-2 0-.679-.057-1.343-.14-2h3.377c.166.64.263 1.308.263 2s-.097 1.36-.263 2m-5.144 5.561a15.85 15.85 0 0 0 1.379-3.561h2.949a8.021 8.021 0 0 1-4.328 3.561zm-.254-5.561h-4.68a13.883 13.883 0 0 1-.16-2c0-.681.066-1.345.16-2h4.68c.095.655.16 1.319.16 2s-.065 1.345-.16 2zm-2.341 5.964a13.958 13.958 0 0 1-1.91-3.964h3.822a13.94 13.94 0 0 1-1.912 3.964zM8.026 7.998h-2.95a8 8 0 0 1 4.329-3.563 15.828 15.828 0 0 0-1.38 3.563zm-2.95 8h2.95c.323 1.251.779 2.45 1.379 3.563a8 8 0 0 1-4.328-3.563zm-.815-2a7.992 7.992 0 0 1-.261-2c0-.692.096-1.36.26-2h3.378a16.09 16.09 0 0 0-.138 2c0 .68.056 1.343.138 2m4.36-9.964a13.94 13.94 0 0 1 1.912 3.964h-3.821a13.96 13.96 0 0 1 1.909-3.964zm6.923 3.964h-2.95a15.85 15.85 0 0 0-1.378-3.56 8.021 8.021 0 0 1 4.328 3.56zm-6.927-6C6.468 1.998 2 6.475 2 11.998s4.468 10 9.994 10c5.527 0 10.006-4.477 10.006-10s-4.48-10-10.006-10z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__web '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});