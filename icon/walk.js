(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.walk=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M14.117 9.998H19v-1.8h-3.622l-2-3.33a1.697 1.697 0 0 0-1.953-.762L6 5.798v5.2h1.8V7.331l2.107-.657L6 21.998h1.8l2.87-8.108L13 16.998v5h1.8v-6.406l-2.489-4.54.733-2.868M14 3.798A1.801 1.801 0 1 0 13.997.2 1.801 1.801 0 0 0 14 3.798z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__walk '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});