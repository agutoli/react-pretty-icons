(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.noteText=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(g){return g&&g.__esModule?g:{default:g}}(b);a.default=function(){var g=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M14 9.998h5.5l-5.5-5.5v5.5zm-9-7h10l6 6v10a2 2 0 0 1-2 2H4.99a1.992 1.992 0 0 1-1.99-2l.01-14c0-1.104.884-2 1.99-2zM5 12v2h14v-2H5zm0 4v2h9v-2H5z"/></svg>')[1];return e.default.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__note-text',dangerouslySetInnerHTML:{__html:g}})},module.exports=a.default});