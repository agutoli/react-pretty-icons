(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.fileCloud=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M13 8.998h5.5l-5.5-5.5v5.5zm-7-7h8l6 6v12a2 2 0 0 1-2 2H5.99a1.992 1.992 0 0 1-1.99-2l.01-16c0-1.104.884-2 1.99-2zm9.678 13.02a3.748 3.748 0 1 0-7.002-1A3 3 0 0 0 9 20h6.5a2.5 2.5 0 0 0 2.5-2.5c0-1.32-1.026-2.39-2.322-2.482z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__file-cloud '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});