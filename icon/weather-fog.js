(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.weatherFog=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M3 15h10a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zm13 0h5a1 1 0 1 1 0 2h-5a1 1 0 1 1 0-2zM1 12a5 5 0 0 1 4.998-5 6.502 6.502 0 0 1 12.485 2.033L19 9c2.193 0 3.974 1.764 4 4h-2a2 2 0 0 0-2-2h-2v-1a5 5 0 0 0-9.935-.806A3 3 0 0 0 3.17 13H1.1L1 12zm2 7h2a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zm5 0h13a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__weather-fog '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});