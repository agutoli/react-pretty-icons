(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.controllerClassicOutline=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M17.5 7a5.5 5.5 0 1 1-4.243 9h-2.514A5.5 5.5 0 1 1 6.5 7h11zm-11 2a3.5 3.5 0 1 0 3.163 5h4.674A3.5 3.5 0 1 0 17.5 9h-11zm-.75 1.25h1.5v1.5h1.5v1.5h-1.5v1.5h-1.5v-1.5h-1.5v-1.5h1.5v-1.5zm11 2.25a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm2-2a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__controller-classic-outline '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});