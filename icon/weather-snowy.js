(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.weatherSnowy=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M6 14a1 1 0 1 1 0 2 5 5 0 0 1-.002-10 6.502 6.502 0 0 1 12.485 2.033L19 8a4 4 0 0 1 0 8h-1a1 1 0 1 1 0-2h1a2 2 0 1 0 0-4h-2V9a5 5 0 0 0-9.935-.806A3 3 0 1 0 6 14zm1.877 4.07l2.191-.588-1.604-1.603a1 1 0 1 1 1.415-1.415l1.603 1.604.587-2.19a1 1 0 0 1 1.932.517l-.587 2.19 2.19-.586a1 1 0 1 1 .518 1.932l-2.19.587 1.604 1.603a1 1 0 1 1-1.415 1.415l-1.603-1.604-.587 2.19a1 1 0 1 1-1.932-.517l.587-2.19-2.19.586a1 1 0 0 1-.519-1.932z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__weather-snowy '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});