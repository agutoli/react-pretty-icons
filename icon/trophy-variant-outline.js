(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.trophyVariantOutline=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M7 2v2H2v7c0 1 1 2 2 2h3.2c.4 1.9 1.4 3.6 3.8 3.9V19c-3 .2-3 1.3-3 2.6v.4h8v-.3c0-1.3 0-2.4-3-2.6V17c2.5-.3 3.5-2 3.8-3.9H20c1 0 2-1 2-2V4h-5V2H7zm2 2h6v8c0 1.657-1 3-3 3s-3-1.343-3-3V4zM4 6h3v5H4V6zm13 0h3v5h-3V6z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__trophy-variant-outline '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});