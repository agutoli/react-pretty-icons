(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.cartPlus=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M11.001 8.999h1.997V6H16V4h-3.004V1H11v2.998H7.998V6H11M7.003 17.997A2 2 0 0 0 5.01 20a2 2 0 0 0 1.993 2.003A2.007 2.007 0 0 0 8.998 20a2.007 2.007 0 0 0-1.997-2.003zm10 0A2 2 0 0 0 15.01 20a2 2 0 0 0 1.993 2.003A2.007 2.007 0 0 0 18.998 20a2.007 2.007 0 0 0-1.996-2.003zm-9.835-3.246l.034-.122.898-1.631h7.451c.748 0 1.406-.41 1.749-1.03l3.863-7.007L19.419 4h-.01L18.31 6l-2.759 5H8.53l-.131-.268L6.163 6 5.21 4l-.942-1.997H1V4h1.997L6.6 11.59l-1.35 2.448A1.936 1.936 0 0 0 5 15a2.01 2.01 0 0 0 2.003 2.003h11.996V15H7.423a.258.258 0 0 1-.255-.249z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__cart-plus '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});