(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.tag=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg viewBox="0 0 16 16"><path d="M15.117 7.879l-7.414 7.414a1 1 0 0 1-1.414 0L.663 9.667a1 1 0 0 1-.04-1.372L7.1 1.007A3 3 0 0 1 9.343 0h3.653a3 3 0 0 1 3 3v2.757a3 3 0 0 1-.879 2.122zM12.497 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__tag '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});