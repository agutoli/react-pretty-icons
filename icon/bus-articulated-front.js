(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.busArticulatedFront=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M1 6l1.5 1.5L1 9l1.5 1.5L1 12l1.5 1.5L1 15h2a3 3 0 1 0 6 0h6a3 3 0 1 0 6 0h2V8c0-1.11-.89-2.025-2-2H1zm3 1.5h2.5V10H4V7.5zm4 0h4V10H8V7.5zm5.5 0h4V10h-4V7.5zm5.5 0h2.5V13L19 11V7.5zm-13 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm12 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__bus-articulated-front '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});