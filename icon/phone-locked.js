(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.phoneLocked=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M19.2 3.998h-3.4V3.5a1.7 1.7 0 1 1 3.4 0m.8.498V3.5a2.499 2.499 0 1 0-5 0v.498a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1zm0 11.5c-1.247 0-2.448-.2-3.573-.568a.999.999 0 0 0-1.015.245l-2.2 2.203a15.078 15.078 0 0 1-6.59-6.585l2.2-2.208a1 1 0 0 0 .246-1.015A11.467 11.467 0 0 1 8.5 3.998a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1c0 9.389 7.61 17 17 17a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__phone-locked '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});