(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.mouseBluetooth=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M20 7h.5l2.85 2.85L21.21 12l2.14 2.14L20.5 17H20v-3.791L17.71 15.5l-.71-.71L19.79 12 17 9.209l.71-.709L20 10.79V7zm1 1.91v1.88l.94-.94-.94-.94zm0 4.299v1.871l.94-.94-.94-.931zM15 9v1H9V2.07c3.392.486 6 3.404 6 6.93zM1 10V9a7.002 7.002 0 0 1 6-6.93V10H1zm14 5a7 7 0 1 1-14 0v-3h14v3z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__mouse-bluetooth '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});