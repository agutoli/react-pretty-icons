(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.languageJavascript=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M3 3h18v18H3V3zm4.733 15.042c.399.846 1.184 1.546 2.537 1.546 1.498 0 2.526-.797 2.526-2.549v-5.775h-1.692v5.751c0 .846-.35 1.063-.906 1.063-.58 0-.822-.398-1.088-.87l-1.377.834zm5.981-.181c.496.979 1.51 1.728 3.081 1.728 1.607 0 2.803-.834 2.803-2.356 0-1.414-.81-2.042-2.247-2.659l-.423-.18c-.725-.315-1.039-.52-1.039-1.028 0-.41.314-.725.81-.725.483 0 .797.206 1.087.725l1.317-.846c-.556-.978-1.329-1.353-2.404-1.353-1.51 0-2.477.967-2.477 2.235 0 1.378.81 2.03 2.03 2.55l.422.181c.774.338 1.233.544 1.233 1.124 0 .483-.447.833-1.148.833-.834 0-1.305-.434-1.667-1.027l-1.378.798z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__language-javascript '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});