(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.cctv=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M18.151 4.94a1.992 1.992 0 0 0-1.139.263l-8.66 5a1.997 1.997 0 0 0-.732 2.733l1.5 2.598a1.996 1.996 0 0 0 2.732.732l1.797-1.038c.266.463.674.828 1.162 1.042v1.77c0 1.086.893 1.96 2 1.96H22v-1.96h-5.19v-1.772a2.501 2.501 0 0 0 1.501-2.287 2.497 2.497 0 0 0-.338-1.25l2.539-1.465a1.997 1.997 0 0 0 .731-2.733l-1.5-2.597a1.995 1.995 0 0 0-1.592-.996zM6.215 13.17l-4.214.701.75 1.299 2 3.463.75 1.299 2.714-3.299-2-3.463z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__cctv '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});