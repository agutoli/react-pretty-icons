(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.setLeftCenter=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M9 5a7.001 7.001 0 0 1 3.002.684A6.998 6.998 0 0 1 15 5a7 7 0 1 1 0 14 7.001 7.001 0 0 1-3.002-.684A6.99 6.99 0 0 1 9 19 7 7 0 1 1 9 5zm6 2l-1.004.107A7 7 0 0 1 16 12a7 7 0 0 1-2.002 4.898L15 17a5 5 0 0 0 0-10zm-6.5 5a6.48 6.48 0 0 0 2.064 4.75l.999-.456A5.49 5.49 0 0 1 9.5 12a5.49 5.49 0 0 1 2.063-4.294l-1-.457A6.482 6.482 0 0 0 8.5 12z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__set-left-center '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});