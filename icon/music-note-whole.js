(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.musicNoteWhole=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(g){return g&&g.__esModule?g:{default:g}}(b);a.default=function(){var g=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M10.5 12a4.5 4.5 0 0 0-4.236 3H3v3h3.264a4.5 4.5 0 0 0 4.236 3 4.5 4.5 0 0 0 4.236-3H19v-3h-4.264a4.5 4.5 0 0 0-4.236-3zm0 2.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/></svg>')[1];return e.default.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__music-note-whole',dangerouslySetInnerHTML:{__html:g}})},module.exports=a.default});