(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.kettle=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M12.5 3C7.806 3 4 5.686 4 9c.003 1.185.503 2.343 1.438 3.328C4.53 13.521 4 14.956 4 16.5c.01 1.14 0 2.33 0 3.5 0 1.108.892 2 2 2h13c1.108 0 2-.892 2-2-.004-1.15 0-2.39 0-3.5a6.807 6.807 0 0 0-.992-3.508L22 11l-3-3-2.096 2.096A9.364 9.364 0 0 0 12.5 9a9.232 9.232 0 0 0-4.945 1.408C7.193 9.97 7.004 9.488 7 9c0-1.795 2.462-3.25 5.5-3.25 1.43.002 2.803.332 3.828.922L18.35 4.65C16.77 3.592 14.677 3.001 12.5 3zm0 8c.341 0 .673.035 1 .086C10.386 11.568 8 14.25 8 17.5V20H6v-2.5a6.5 6.5 0 0 1 6.5-6.5z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__kettle '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});