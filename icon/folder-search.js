(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.folderSearch=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M16.5 12a4.5 4.5 0 0 1 3.807 6.9l3.084 3.084-1.407 1.407-3.108-3.069A4.5 4.5 0 1 1 16.5 12zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM9 3.998l2 2h8c1.103 0 2 .896 2 2v3.811a6.5 6.5 0 0 0-9.979 8.19H2.999a2 2 0 0 1-2-2l.01-12c0-1.105.885-2 1.99-2h6z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__folder-search '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});