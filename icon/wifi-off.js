(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.wifiOff=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M2.275 2.998l-1.274 1.27 1.47 1.474a16.03 16.03 0 0 0-1.27.86l1.796 2.397a14.42 14.42 0 0 1 1.662-1.074l2.226 2.231a11.54 11.54 0 0 0-2.085 1.24L6.601 13.8A8.951 8.951 0 0 1 9.2 12.466l2.553 2.554A5.983 5.983 0 0 0 8.4 16.201l3.604 4.8 2.454-3.276 3.278 3.276L19 19.721M12.003 2.998c-2.15 0-4.2.386-6.104 1.074L8.29 6.465a14.982 14.982 0 0 1 3.711-.464 14.93 14.93 0 0 1 9 2.998l1.8-2.398a17.93 17.93 0 0 0-10.8-3.603zm0 6c-.382 0-.753.02-1.124.055l3.189 3.193a8.966 8.966 0 0 1 3.335 1.553l1.796-2.403A11.946 11.946 0 0 0 12.002 9z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__wifi-off '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});