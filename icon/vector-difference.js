(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.vectorDifference=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M3 1c-1.108 0-2 .892-2 2v11c0 1.108.892 2 2 2h2v-2H3V3h11v2h2V3c0-1.108-.892-2-2-2H3zm6 6c-1.108 0-2 .892-2 2v2h2V9h2V7H9zm4 0v2h1v1h2V7h-3zm5 0v2h2v11H9v-2H7v2c0 1.108.892 2 2 2h11c1.108 0 2-.892 2-2V9c0-1.108-.892-2-2-2h-2zm-4 5v2h-2v2h2c1.108 0 2-.892 2-2v-2h-2zm-7 1v3h3v-2H9v-1H7z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__vector-difference '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});