(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.vanish=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M16 13v-2h5v2h-5zm-1.172-5.243l2.829-2.829 1.414 1.415-2.829 2.828-1.414-1.414zM11 16h2v5h-2v-5zm0-13h2v5h-2V3zM4.929 17.657l2.829-2.829 1.414 1.414-2.828 2.829-1.415-1.414zm0-11.314l1.415-1.415 2.828 2.829-1.414 1.414-2.829-2.828zM8 13H3v-2h5v2zm11.071 4.657l-1.414 1.414-2.829-2.829 1.414-1.414 2.829 2.829z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__vanish '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});