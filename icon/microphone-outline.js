(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.microphoneOutline=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M17.298 10.998c0 3-2.537 5.1-5.299 5.1-2.762 0-5.3-2.1-5.3-5.1H5c0 3.415 2.72 6.233 6 6.718v3.282h2v-3.282c3.28-.485 6-3.303 6-6.718m-8.2-6.1c0-.662.54-1.2 1.2-1.2.661 0 1.2.541 1.2 1.2l-.009 6.2c0 .662-.535 1.2-1.19 1.2-.662 0-1.2-.538-1.2-1.2m1.2 2.9a2.992 2.992 0 0 0 2.99-3l.008-6a3 3 0 0 0-5.999 0v6c0 1.656 1.344 3 3 3z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__microphone-outline '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});