(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.imagePlus=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9.086A6.007 6.007 0 0 1 14 20a5.999 5.999 0 0 1 .352-2H5l3.5-4.5 2.5 3 3.5-4.5 2.229 2.973A6 6 0 0 1 20 14c.335.002.67.032 1 .09V5a2 2 0 0 0-2-2H5zm14 13v3h-3v2h3v3h2v-3h3v-2h-3v-3h-2z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__image-plus '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});