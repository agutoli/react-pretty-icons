(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.gridOff=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M0 2.768L1.277 1.5 22.5 22.723 21.232 24l-2-2H4.023a2 2 0 0 1-2-2L2.001 4.77 0 2.769zM10 4v3.677l-2-2V4H6.323l-2-2H20a2 2 0 0 1 2 2l.023 15.7-2.003-2.003L20.018 16h-1.695l-2-2h3.692l-.006-4H16v3.677l-2-2V10h-1.677l-2-2H14V4h-4zm6 0v4h4.006L20 4h-4zm0 16h1.232L16 18.768V20zM4.006 8h1.226L4.004 6.773 4.006 8zM10 14h1.232L10 12.768V14zm4 6v-3.232L13.232 16H10v4h4zm-6 0v-4H4.018l.005 4H8zm0-6v-3.232L7.232 10H4.009l.006 4H8z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__grid-off '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});