(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.accountSwitch=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M16 9c2.333 0 7 1.168 7 3.5V15h-6v-2.5c0-1.483-.806-2.609-1.965-3.446L16 9zM8 9c2.333 0 7 1.168 7 3.5V15H1v-2.5C1 10.168 5.666 9 8 9zm0-2a3 3 0 0 1 0-6 2.992 2.992 0 0 1 2.99 3c0 1.656-1.333 3-2.99 3zm8 0a3 3 0 0 1 0-6 2.992 2.992 0 0 1 2.99 3c0 1.656-1.333 3-2.99 3zm-7 9.75V19h6v-2.25L18.25 20 15 23.25V21H9v2.25L5.75 20 9 16.75z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__account-switch '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});