(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.folderClock=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M3 4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h7.258A7 7 0 0 0 23 16a7 7 0 0 0-2-4.889V8a2 2 0 0 0-2-2h-8L9 4H3zm13 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm-1 1v5l3.61 2.16.75-1.22-2.86-1.69V12H15z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__folder-clock '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});