(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.photoCamera=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129"><path d="M10.5 122.6h107.9c2.3 0 4.1-1.8 4.1-4.1v-108c0-2.3-1.8-4.1-4.1-4.1H10.5c-2.3 0-4.1 1.8-4.1 4.1v108c0 2.2 1.9 4.1 4.1 4.1zm32.3-108h71.5v45.8H94c-2-14.5-14.5-25.8-29.5-25.8-8.5 0-16.2 3.6-21.7 9.4V14.6zm21.7 28.2c11.9 0 21.7 9.7 21.7 21.7s-9.7 21.7-21.7 21.7-21.7-9.7-21.7-21.7 9.8-21.7 21.7-21.7zM14.6 14.6h20v45.8h-20V14.6zm0 54H35c2 14.5 14.5 25.8 29.5 25.8S92 83.1 94 68.6h20.3v45.8H14.6V68.6z"/><path d="M86.3 33.1h10.6c2.3 0 4.1-1.8 4.1-4.1s-1.8-4.1-4.1-4.1H86.3c-2.3 0-4.1 1.8-4.1 4.1s1.8 4.1 4.1 4.1zM64.5 80C73.1 80 80 73 80 64.5S73.1 49 64.5 49 49 55.9 49 64.5 55.9 80 64.5 80zm0-22.9c4.1 0 7.4 3.3 7.4 7.4s-3.3 7.4-7.4 7.4-7.4-3.3-7.4-7.4 3.3-7.4 7.4-7.4z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__photo-camera '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});