(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.tagOutline=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M5.499 6.999a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm15.91 4.58c.365.363.59.865.59 1.42 0 .552-.223 1.05-.585 1.414l-7 7a1.999 1.999 0 0 1-2.83 0l-8.997-8.998a1.994 1.994 0 0 1-.588-1.416v-7a2 2 0 0 1 2-2h7c.553 0 1.053.223 1.415.585l8.996 8.996zM13 20l7-7-8.5-8.5-7 7L13 20z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__tag-outline '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});