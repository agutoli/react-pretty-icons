(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.edge=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M2.737 10.808c1.092-12.17 19.779-12.17 18.46 2.75H8.614c0 4.295 5.802 5.651 10.925 2.75v4.22c-6.291 3.353-14.542.904-14.542-6.443 0-5.5 4.973-7.27 4.973-7.27s-1.394 1.77-1.431 3.24h7.158c0-7.121-9.796-4.484-12.96.753z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__edge '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});