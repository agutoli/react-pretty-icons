(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.playlistEdit=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M2 6v2h12V6H2zm0 4v2h12v-2H2zm18.035.135c-.14 0-.28.056-.385.166l-1 1 2.05 2.049 1-1c.22-.21.22-.56 0-.77l-1.28-1.28a.53.53 0 0 0-.385-.165zM18.07 11.88L12 17.939V20h2.06l6.06-6.07-2.05-2.05zM2 14v2h8v-2H2z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__playlist-edit '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});