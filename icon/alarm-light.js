(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.alarmLight=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M6 6.9L3.87 4.78l1.41-1.41L7.4 5.49 6 6.9zM13 1v3h-2V1h2zm7.13 3.78L18 6.9l-1.4-1.41 2.12-2.12 1.41 1.41zM4.5 10.5v2h-3v-2h3zm15 0h3v2h-3v-2zM6 20h12a2 2 0 0 1 2 2H4a2 2 0 0 1 2-2zm6-15a6 6 0 0 1 6 6v8H6v-8a6 6 0 0 1 6-6z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__alarm-light '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});