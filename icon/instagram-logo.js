(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.instagramLogo=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.652 49.652"><path d="M24.825 29.796a4.978 4.978 0 0 0 4.972-4.97 4.954 4.954 0 0 0-.94-2.897 4.964 4.964 0 0 0-4.029-2.073c-1.659 0-3.126.82-4.031 2.072a4.947 4.947 0 0 0-.94 2.897 4.973 4.973 0 0 0 4.968 4.971zm10.853-11.05V13.96l-.623.002-4.164.013.016 4.787z"/><path d="M24.826 0C11.137 0 0 11.137 0 24.826c0 13.688 11.137 24.826 24.826 24.826 13.688 0 24.826-11.138 24.826-24.826C49.652 11.137 38.516 0 24.826 0zm14.119 21.929v11.56a5.463 5.463 0 0 1-5.457 5.458H16.164a5.462 5.462 0 0 1-5.457-5.458V16.165a5.462 5.462 0 0 1 5.457-5.457h17.323a5.463 5.463 0 0 1 5.458 5.457v5.764z"/><path d="M32.549 24.826c0 4.257-3.464 7.723-7.723 7.723s-7.722-3.466-7.722-7.723a7.67 7.67 0 0 1 .568-2.897h-4.215v11.56a2.706 2.706 0 0 0 2.706 2.704h17.323a2.707 2.707 0 0 0 2.706-2.704v-11.56h-4.217c.367.894.574 1.873.574 2.897z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__instagram-logo '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});