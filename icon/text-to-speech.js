(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.textToSpeech=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M8 7a2 2 0 0 1 2 2v5a2 2 0 1 1-4 0V9a2 2 0 0 1 2-2zm6 7a6.002 6.002 0 0 1-5 5.917V22H7v-2.083A6.002 6.002 0 0 1 2 14h2a4 4 0 0 0 8 0h2zm7.414-4.586l-4.242 4.243L18.176 10H14a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4c0 .552-.224 1.052-.586 1.414z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__text-to-speech '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});