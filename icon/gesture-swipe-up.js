(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.gestureSwipeUp=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M10 9a1 1 0 1 1 2 0v4.47l1.21.13 4.94 2.19c.526.242.86.771.85 1.35v4.36a1.55 1.55 0 0 1-1.5 1.5H11a1.37 1.37 0 0 1-1-.43l-4.9-4.2.74-.77a1 1 0 0 1 .74-.32h.22L10 19V9zM7 6L4 3 1 6h2v6h2V6h2z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__gesture-swipe-up '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});