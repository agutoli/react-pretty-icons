(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.fileMultiple=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(g){return g&&g.__esModule?g:{default:g}}(b);a.default=function(){var g=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M15 7h5.5L15 1.5V7zM8 0h8l6 6v12a2 2 0 0 1-2 2H7.99A1.992 1.992 0 0 1 6 18l.01-16c0-1.104.885-2 1.99-2zM4 4v18h16v2H4c-1.1 0-2-.9-2-2V4h2z"/></svg>')[1];return e.default.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__file-multiple',dangerouslySetInnerHTML:{__html:g}})},module.exports=a.default});