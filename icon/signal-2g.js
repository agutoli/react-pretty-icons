(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.signal2g=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M11 19.5H2v-6a3 3 0 0 1 3-3h3v-3H2v-3h6a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3H5v3h6m11-6h-4.5v3H19v3h-3v-9h6v-3h-6a3 3 0 0 0-3 3v9c0 1.657 1.343 2.973 3 3h3a3 3 0 0 0 3-3"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__signal-2g '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});