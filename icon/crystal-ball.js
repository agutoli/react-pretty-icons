(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.crystalBall=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M9.379 8.379l2.121.964 2.121-.964-.964 2.121.964 2.121-2.121-.964-2.121.964.964-2.121-.964-2.121zM16.5 2.5l1.09 2.91L20.5 6.5l-2.91 1.09-1.09 2.91-1.09-2.91L12.5 6.5l2.91-1.09L16.5 2.5zM6 19h1v-1a1 1 0 0 1 1-1h.256A7.5 7.5 0 1 1 14.96 3.607l-.37.984-1.422.533a5.5 5.5 0 1 0 4.32 5.74l.921-2.455.713-.267A7.5 7.5 0 0 1 19.5 10.5a7.497 7.497 0 0 1-3.756 6.5H16a1 1 0 0 1 1 1v1h1a2 2 0 0 1 2 2v1H4v-1a2 2 0 0 1 2-2z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__crystal-ball '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});