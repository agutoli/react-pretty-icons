(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.musicNoteOff=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(g){return g&&g.__esModule?g:{default:g}}(b);a.default=function(){var g=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M12 3v5.676l3 3V6h4V3h-7zM5.277 4.5L4 5.768l6.256 6.257C7.886 12.155 6 14.098 6 16.5a4.5 4.5 0 0 0 4.5 4.5c2.402 0 4.345-1.887 4.475-4.256l4.709 4.71 1.273-1.274L15 14.223l-3-3L5.277 4.5z"/></svg>')[1];return e.default.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__music-note-off',dangerouslySetInnerHTML:{__html:g}})},module.exports=a.default});