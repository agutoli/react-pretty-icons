(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.commentAlertOutline=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M9 22a1 1 0 0 1-1-1v-3H4a2 2 0 0 1-2-2l.01-12.002c0-1.105.885-2 1.99-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2L13.903 18l-3.706 3.706a.997.997 0 0 1-.697.293V22H9zm1-6v3.075L13.075 16H20V4H4v12h6zm3-6h-2V6h2v4zm0 4h-2v-2h2v2z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__comment-alert-outline '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});