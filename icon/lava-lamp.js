(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.lavaLamp=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M10 3L8 16h8L14 3h-4zm1.5 2.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zm1 2.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-1 3.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM8 17l2 2-2 2h8l-2-2 2-2H8z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__lava-lamp '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});