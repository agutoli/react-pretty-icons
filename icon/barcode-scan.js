(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.barcodeScan=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M4 6h2v12H4V6zm3 0h1v12H7V6zm2 0h3v12H9V6zm4 0h1v12h-1V6zm3 0h2v12h-2V6zm3 0h1v12h-1V6zM2 4v4H0V4c0-1.1.9-2 2-2h4v2H2zm20-2c1.1 0 2 .9 2 2v4h-2V4h-4V2h4zM2 16v4h4v2H2c-1.1 0-2-.9-2-2v-4h2zm20 4v-4h2v4c0 1.1-.9 2-2 2h-4v-2h4z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__barcode-scan '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});