(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.multiplicationBox=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M19 2.998c1.102 0 2 .896 2 2v14c0 1.104-.898 2-2 2H5a2 2 0 0 1-2-2v-14a2 2 0 0 1 2-2h14zM11 17h2v-3.27l2.83 1.634 1-1.732L14 11.998l2.83-1.634-1-1.732L13 10.266V7h-2v3.266L8.17 8.632l-1 1.732L10 11.998l-2.83 1.634 1 1.732L11 13.73V17z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__multiplication-box '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});