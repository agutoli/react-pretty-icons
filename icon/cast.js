(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.cast=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M1 9.998v2a9 9 0 0 1 9 9h2c0-6.075-4.927-11-11-11zm0 4v2a5 5 0 0 1 5 5h2a7 7 0 0 0-7-7zm0 4v3h3c0-1.656-1.345-3-3-3zm20-15H3a2 2 0 0 0-2 2v3h2v-3h18v14h-7v2h7c1.103 0 2-.896 2-2v-14c0-1.104-.897-2-2-2z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__cast '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});