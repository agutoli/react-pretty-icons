(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.googleKeep=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M4 2h16a2 2 0 0 1 2 2v13.328L17.328 22H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm13 15v3.25L20.25 17H17zm-7 2h4v-1h1v-5a5 5 0 1 0-6 0v5h1v1zm4-2h-4v-1h4v1zm0-2h-4v-1h4v1zM12 5a4 4 0 0 1 2 7.465V13h-4v-.535A4 4 0 0 1 12 5z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__google-keep '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});