(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.seatLegroomExtra=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M3.999 12.002V2.998H2.002v9.005a5 5 0 0 0 5 5h5.996V15H7.003a2.996 2.996 0 0 1-3.004-2.998zm18.833 5.24c-.38-.723-1.294-.972-2.03-.63l-1.09.497L16.3 10.13a2.002 2.002 0 0 0-1.79-1.12L11 9V2.998H5V11a2.992 2.992 0 0 0 2.997 3H15l3.409 7 3.72-1.7c.771-.361 1.104-1.303.703-2.06z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__seat-legroom-extra '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});