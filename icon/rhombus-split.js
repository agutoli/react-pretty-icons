(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.rhombusSplit=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M7.357 5.943L10.8 2.5c.7-.7 1.7-.7 2.4 0l3.443 3.443L12 10.586 7.357 5.943zm10.7 1.414L13.414 12l4.643 4.643L21.5 13.2c.6-.7.6-1.7 0-2.4l-3.443-3.443zM5.943 16.643L10.586 12 5.943 7.357 2.5 10.8c-.7.7-.7 1.7 0 2.4l3.443 3.443zM12 13.414l-4.643 4.643L10.8 21.5c.7.7 1.7.7 2.4 0l3.443-3.443L12 13.414z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__rhombus-split '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});