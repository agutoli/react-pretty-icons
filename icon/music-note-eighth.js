(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.musicNoteEighth=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(g){return g&&g.__esModule?g:{default:g}}(b);a.default=function(){var g=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M12 3v9.264A4.5 4.5 0 0 0 10.5 12c-1.957 0-3.605 1.256-4.225 3H3v3h3.275c.62 1.744 2.268 3 4.225 3 1.957 0 3.605-1.256 4.225-3H19v-3h-4V6h4V3h-7z"/></svg>')[1];return e.default.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__music-note-eighth',dangerouslySetInnerHTML:{__html:g}})},module.exports=a.default});