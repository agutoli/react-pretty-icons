(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.tennis=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M12 2a9.96 9.96 0 0 1 6.5 2.4A9.978 9.978 0 0 0 15 12a9.978 9.978 0 0 0 3.5 7.6A9.96 9.96 0 0 1 12 22a9.96 9.96 0 0 1-6.5-2.4A9.978 9.978 0 0 0 9 12a9.978 9.978 0 0 0-3.5-7.6A9.96 9.96 0 0 1 12 2zm10 10c0 2.32-.79 4.455-2.115 6.151A7.984 7.984 0 0 1 17 12a7.984 7.984 0 0 1 2.885-6.151A9.957 9.957 0 0 1 22 12zM2 12c0-2.32.79-4.455 2.115-6.151A7.983 7.983 0 0 1 7 12a7.984 7.984 0 0 1-2.885 6.151A9.957 9.957 0 0 1 2 12z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__tennis '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});