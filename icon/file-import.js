(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.fileImport=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M6.001 1.998a1.993 1.993 0 0 0-1.992 2L3.999 20c0 1.104.889 1.997 1.992 1.997h12.006A2.001 2.001 0 0 0 20 20V7.997l-6.001-6m-1.002 1.499l5.504 5.503h-5.504M10.05 11.22l2.832 2.832L15 11.928v7.07H7.93l2.119-2.119-2.828-2.827"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__file-import '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});