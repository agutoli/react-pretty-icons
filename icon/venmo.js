(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.venmo=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(g){return g&&g.__esModule?g:{default:g}}(b);a.default=function(){var g=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M19.49 3c.654 1.08.949 2.194.949 3.6 0 4.484-3.828 10.31-6.935 14.4H6.407L3.561 3.982l6.214-.59 1.505 12.11c1.406-2.291 3.14-5.89 3.14-8.345 0-1.343-.23-2.258-.589-3.012L19.49 3z"/></svg>')[1];return e.default.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__venmo',dangerouslySetInnerHTML:{__html:g}})},module.exports=a.default});