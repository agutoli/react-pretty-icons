(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.clockAlertOutline=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M11.994 1.998C6.467 1.998 2 6.475 2 11.998s4.467 10 9.994 10A9.95 9.95 0 0 0 18 19.982v-2.705a7.972 7.972 0 0 1-6 2.721 8 8 0 0 1-8-8A7.998 7.998 0 1 1 19.414 9h2.127a10.007 10.007 0 0 0-9.547-7.002zm-.994 5v6l5.246 3.15.754-1.23-4.5-2.67v-5.25H11zM20 11v7h2v-7h-2zm0 9v2h2v-2h-2z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__clock-alert-outline '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});