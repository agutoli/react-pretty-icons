(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.keyboardClose=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M12 22.998l4-4H8m11-11h-2v-2h2m0 5h-2v-2h2m-3-1h-2v-2h2m0 5h-2v-2h2m0 6H8v-2h8m-9-5H5v-2h2m0 5H5v-2h2m1 0h2v2H8m0-5h2v2H8m3 1h2v2h-2m0-5h2v2h-2m9-5H4a1.99 1.99 0 0 0-1.99 2l-.01 10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-10a2 2 0 0 0-2-2z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__keyboard-close '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});