(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.clockIn=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M2.208.791L.79 2.208l4.004 3.998-1.797 1.791h5v-5L6.205 4.796m5.796 3.202a7.002 7.002 0 1 0 0 14.006A7.001 7.001 0 0 0 19 15a7.001 7.001 0 0 0-6.996-7.003zm-.005 2.154a4.852 4.852 0 0 1 0 9.703A4.849 4.849 0 0 1 7.15 15a4.848 4.848 0 0 1 4.849-4.849zM11 12.003v3.687l3.189 1.84.746-1.299-2.436-1.406v-2.822"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__clock-in '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});