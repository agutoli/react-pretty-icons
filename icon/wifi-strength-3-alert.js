(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.wifiStrength3Alert=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M12.002 2.998A18.986 18.986 0 0 0 .377 7.003c4.038 5.057 7.515 9.37 11.635 14.486 2.443-3.041 4.664-5.805 6.988-8.705V9.585l-.234.297c-1.504-.898-3.888-1.885-6.763-1.885-3.013 0-5.322 1.012-6.797 1.847L3.271 7.436A17.047 17.047 0 0 1 12.003 5c3.07.015 6.083.859 8.71 2.451l-.44.546h2.568c.245-.297.572-.707.806-.994a18.98 18.98 0 0 0-11.644-4.005zm9 7.002v7.997h1.995V10m-1.996 10v2.003h1.996V20"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__wifi-strength-3-alert '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});