(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.musicNoteBluetooth=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M10 3v9.264A4.499 4.499 0 0 0 8.5 12a4.5 4.5 0 1 0 4.5 4.5V6h4V3h-7zm10 4v3.79L17.71 8.5l-.71.71L19.79 12 17 14.79l.71.71L20 13.21V17h.5l2.85-2.85L21.21 12l2.15-2.15L20.5 7H20zm1 1.91l.94.94-.94.94V8.91zm0 4.3l.94.94-.94.94v-1.88z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__music-note-bluetooth '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});