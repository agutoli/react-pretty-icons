(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.settings=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M12 15.498a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7zm7.428-2.524a7.5 7.5 0 0 0 .07-.976 7.5 7.5 0 0 0-.07-.976l2.113-1.654a.5.5 0 0 0 .118-.638l-2-3.464a.5.5 0 0 0-.612-.217l-2.489 1.003a7.474 7.474 0 0 0-1.69-.983l-.375-2.65A.501.501 0 0 0 14 2l-4-.001a.5.5 0 0 0-.494.421L9.13 5.07a7.499 7.499 0 0 0-1.69.983L4.95 5.05a.5.5 0 0 0-.612.217l-2 3.464a.5.5 0 0 0 .118.638l2.112 1.654c-.042.32-.07.645-.07.976 0 .331.028.656.07.976l-2.112 1.653a.5.5 0 0 0-.118.64l2 3.463a.5.5 0 0 0 .612.217l2.49-1.003a7.477 7.477 0 0 0 1.69.983l.374 2.65a.5.5 0 0 0 .494.421h4a.501.501 0 0 0 .494-.421l.375-2.65a7.496 7.496 0 0 0 1.69-.984l2.49 1.004a.5.5 0 0 0 .611-.217l2-3.464a.5.5 0 0 0-.118-.639l-2.113-1.653z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__settings '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});