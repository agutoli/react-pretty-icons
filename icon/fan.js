(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.fan=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M12 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm.5-9c4.5 0 4.611 3.57 2.25 4.75-.99.495-1.428 1.54-1.619 2.47.481.197.9.514 1.219.915 3.698-2.002 7.676-1.219 7.676 2.35 0 4.5-3.57 4.61-4.75 2.25-.498-.997-1.554-1.435-2.489-1.623a3.008 3.008 0 0 1-.904 1.224c1.986 3.692 1.199 7.654-2.362 7.654-4.5 0-4.612-3.57-2.25-4.75.983-.492 1.423-1.528 1.615-2.453a3.009 3.009 0 0 1-1.235-.921c-3.693 1.988-7.656 1.2-7.656-2.36 0-4.5 3.569-4.612 4.75-2.25.495.99 1.542 1.428 2.473 1.619.196-.484.515-.906.918-1.226C8.153 5.96 8.94 2 12.5 2z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__fan '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});