(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.stackexchange=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M4 14.037V11h16v3.037H4zM4 10V7h16v3H4zm13.461-8C18.863 2 20 3.178 20 4.63V6H4V4.63C4 3.177 5.135 2 6.536 2h10.925zM4 15h16v1.355c0 1.45-1.137 2.629-2.539 2.629L16.5 19 13 22v-3l-6.464-.016c-1.4 0-2.536-1.178-2.536-2.63V15z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__stackexchange '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});