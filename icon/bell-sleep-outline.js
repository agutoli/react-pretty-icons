(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.bellSleepOutline=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M10 21h4a2 2 0 1 1-4 0zm11-2v1H3v-1l2-2v-6a7 7 0 0 1 5-6.71A2.85 2.85 0 0 1 10 4a2 2 0 1 1 4 0c.005.097.005.193 0 .29A7 7 0 0 1 19 11v6l2 2zm-4-8a5 5 0 0 0-10 0v7h10v-7zM9 9v2h3.24L9 13.7V16h6v-2h-3.24L15 11.3V9H9z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__bell-sleep-outline '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});