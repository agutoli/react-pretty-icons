(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.bluetoothAudio=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M12.878 16.291L11 18.171v-3.759m0-8.586l1.88 1.88L11 9.584m4.707-1.879L10 1.998H9v7.586L4.413 4.998 3 6.412l5.586 5.586L3 17.584l1.414 1.414L9 14.412v7.586h1l5.707-5.707-4.293-4.293m8.115-5.287l-1.264 1.264a8.702 8.702 0 0 1 0 8.046l1.2 1.199a9.934 9.934 0 0 0 .064-10.509zm-5.287 5.298l2.32 2.32a6.463 6.463 0 0 0 .438-2.33c0-.817-.157-1.595-.432-2.315l-2.326 2.325z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__bluetooth-audio '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});