(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.rocket=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M2.808 14.121l2.828-2.828 2.537-.507c3.217-4.376 9.38-6.564 11.605-6.564 0 2.225-2.188 8.388-6.563 11.605l-.508 2.537-2.828 2.828-.707-3.535c-1.415 0-1.415 0-2.122-.707-.707-.707-.707-.707-.707-2.122l-3.535-.707zm2.828 2.829l1.414 1.414-2.664 2.664H2.972v-1.414l2.664-2.664zm-1.414-1.414l1.237.176-2.444 2.445v-1.414l1.207-1.207zm4.066 3.005l.176 1.237-1.207 1.207H5.843l2.445-2.444zM13 9.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__rocket '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});