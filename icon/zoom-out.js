(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.zoomOut=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129"><path d="M51.6 6.5C26.7 6.5 6.5 26.7 6.5 51.6c0 24.9 20.2 45.1 45.1 45.1 11 0 21-3.9 28.9-10.5l35.1 35.1c.8.8 1.8 1.2 2.9 1.2 1 0 2.1-.4 2.9-1.2 1.6-1.6 1.6-4.2 0-5.8l-35.1-35c6.5-7.8 10.5-17.9 10.5-28.9-.1-24.9-20.3-45.1-45.2-45.1zm0 82.1c-20.4 0-37-16.6-37-37s16.6-37 37-37 37 16.6 37 37-16.6 37-37 37z"/><path d="M78.3 47.5H24.9c-2.3 0-4.1 1.8-4.1 4.1s1.8 4.1 4.1 4.1h53.4c2.3 0 4.1-1.8 4.1-4.1s-1.8-4.1-4.1-4.1z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__zoom-out '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});