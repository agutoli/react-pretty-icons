(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.rotateRightVariant=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M10 4V1l4 4-4 4V6a6 6 0 0 0-6 6l.084 1H2.063L2 12a8 8 0 0 1 8-8zm7-2h3a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM4 15h9v7H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__rotate-right-variant '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});