(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.securityOff=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(g){return g&&g.__esModule?g:{default:g}}(b);a.default=function(){var g=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M1 4.268L2.277 3 20.5 21.223 19.232 22.5l-2.255-2.255C15.572 21.567 13.873 22.543 12 23c-5.16-1.26-9-6.45-9-12V6.268l-2-2zM12 1l9 4v6c0 2.28-.648 4.498-1.769 6.409L5.646 3.824 12 1z"/></svg>')[1];return e.default.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__security-off',dangerouslySetInnerHTML:{__html:g}})},module.exports=a.default});