(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.tumbleDryer=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm1 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm2 4a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm-3.893 2.5h1.891c-.24 1.38 0 2.17.58 2.79 1.1 1.07 1.581 2.42 1.31 4.21h-1.89c.24-1.38 0-2.17-.58-2.79-1.1-1.07-1.57-2.42-1.31-4.21zm4 0h1.891c-.24 1.38 0 2.17.58 2.79 1.1 1.07 1.581 2.42 1.31 4.21h-1.89c.24-1.38 0-2.17-.58-2.79-1.1-1.07-1.57-2.42-1.31-4.21z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__tumble-dryer '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});