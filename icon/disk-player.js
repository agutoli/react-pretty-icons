(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.diskPlayer=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M14.499 10.374a1.876 1.876 0 0 0 1.876-1.876A1.873 1.873 0 0 0 14.5 6.626a1.872 1.872 0 0 0-1.873 1.872c0 1.034.838 1.876 1.873 1.876zm0-9.374a7.5 7.5 0 0 1 5.1 13H9.401A7.499 7.499 0 0 1 14.5 1zM6 21v1H4v-1H2v-6h20v6h-2v1h-2v-1H6zm-2-3v1h9v-1H4zm11-1v2h2v-2h-2zm4 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__disk-player '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});