(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.flipToBack=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M15 16.998h2v-2h-2m0-10h2v-2h-2m-10 4H3v12a2 2 0 0 0 2 2h12v-2H5m14-2c1.102 0 2-.896 2-2h-2m0-6h2v-2h-2m0 6h2v-2h-2m-10 6v-2H7a2 2 0 0 0 2 2zm4-14h-2v2h2m6-2v2h2c0-1.104-.898-2-2-2zm-6 12h-2v2h2m-4-14a2 2 0 0 0-2 2h2m0 6H7v2h2m0-6H7v2h2v-2z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__flip-to-back '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});