(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.google=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M21.354 11.104H12.18v2.722h6.506c-.321 3.817-3.497 5.445-6.495 5.445-3.836 0-7.182-3.018-7.182-7.247 0-4.12 3.19-7.294 7.19-7.294 3.087 0 4.905 1.967 4.905 1.967l1.907-1.973S16.564 2 12.102 2C6.421 2 2.025 6.795 2.025 11.975 2.025 17.051 6.16 22 12.247 22c5.354 0 9.273-3.668 9.273-9.09 0-1.145-.166-1.806-.166-1.806z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__google '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});