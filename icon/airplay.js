(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.airplay=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M6 22.005h11.996l-5.995-6.001M21 3H2.996A2.007 2.007 0 0 0 1 5.003v12.002c0 1.098.899 1.996 1.996 1.996h4.005v-1.996H2.996V5.003H21v12.002h-3.999v1.996H21a2.002 2.002 0 0 0 1.996-1.996V5.003A2.006 2.006 0 0 0 21 3z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__airplay '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});