(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.zodiacLeo=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M20 17a3 3 0 0 1-3 3 3.16 3.16 0 0 1-3-3c.162-1.611.497-3.2 1-4.74A23.2 23.2 0 0 0 16 7a5.14 5.14 0 0 0-5-5 5.14 5.14 0 0 0-5 5 19.07 19.07 0 0 0 1 4.48l.21.72A4 4 0 1 0 10 16a21.69 21.69 0 0 0-1.09-5.08A18.92 18.92 0 0 1 8 7a3.16 3.16 0 0 1 3-3 3.16 3.16 0 0 1 3 3 22.465 22.465 0 0 1-1 4.74A23.2 23.2 0 0 0 12 17a5.14 5.14 0 0 0 5 5 5 5 0 0 0 5-5h-2zM6 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__zodiac-leo '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});