(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.xingBox=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M4.8 2.998c-.996 0-1.802.806-1.802 1.802v14.399c0 .996.806 1.802 1.802 1.802h14.399c.996 0 1.802-.806 1.802-1.802V4.8c0-.996-.806-1.802-1.802-1.802M16.069 5h2.036c.122 0 .22.044.269.128.053.087.053.2-.005.312L13.9 13.359l2.846 5.201c.06.111.06.224.006.313-.054.082-.147.126-.268.126h-2.018c-.312 0-.463-.205-.56-.385l-2.872-5.264 4.492-7.964c.108-.196.24-.386.542-.386zM7.085 7.764h2.016c.313 0 .464.2.566.381l1.388 2.421c-.084.141-2.178 3.853-2.178 3.853-.107.186-.25.391-.552.391H6.304a.297.297 0 0 1-.264-.138c-.054-.087-.054-.2 0-.312l2.144-3.794L6.82 8.202c-.053-.11-.068-.223-.015-.312.054-.082.157-.126.279-.126z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__xing-box '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});