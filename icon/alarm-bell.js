(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.alarmBell=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M15 18.66V22H5v-3.34a10 10 0 0 0 10 0zM22 4a2 2 0 0 0-2-2 1.87 1.87 0 0 0-.88.21 2 2 0 0 0-.76.64A2 2 0 0 0 20 6c.08.01.16.01.24 0A11 11 0 0 1 17 18.49a10.23 10.23 0 0 1-1 .73V21h1v-1.26A12 12 0 0 0 22 10a11.81 11.81 0 0 0-.83-4.38A2 2 0 0 0 22 4zm-4 6a8 8 0 1 1-16 0 8 8 0 0 1 16 0z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__alarm-bell '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});