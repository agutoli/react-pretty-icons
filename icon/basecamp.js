(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.basecamp=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M2 16.25s2-12.5 10-12.5 10 12.5 10 12.5-2 4-10 4-10-4-10-4zm1.35-.6S4.3 19 12 19c5 0 8-1.2 8.65-3.15.65-1.95-5-8.25-6-8.25S11.2 12 10.45 12c-2 0-1.55-2-3.3-2-1.75 0-3.8 5.65-3.8 5.65z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__basecamp '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});