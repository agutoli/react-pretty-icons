(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.ember=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M22 14.215s-4.39 3.136-7.276 3.178c-2.885.042-2.592-1.83-2.592-1.83s10.579-3.621 7.694-10.772c-1.297-1.84-2.802-2.417-4.935-2.376-2.132.042-4.716 1.343-6.43 5.19-.82 1.836-1.055 3.576-1.222 4.894 0 0-1.915.378-2.918-.458-1.004-.836-1.552 0-1.552 0s-1.737 2.164-.023 2.833c1.715.669 4.375.95 4.375.95h-.002a8.066 8.066 0 0 0 3.048 4.778c3.136 2.383 9.157-.204 9.157-.204m-7.694-8.064c.125-4.976 3.387-7.15 4.516-6.064 1.129 1.088.71 3.43-1.422 4.893-2.133 1.463-3.094 1.17-3.094 1.17z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__ember '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});