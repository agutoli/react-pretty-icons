(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.heartHalfFull=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(g){return g&&g.__esModule?g:{default:g}}(b);a.default=function(){var g=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M16.5 4.998c-1.477 0-2.92.915-3.5 2.2v10.54c4.249-3.867 7-6.536 7-9.24 0-1.995-1.506-3.5-3.5-3.5zm0-2c3.083 0 5.5 2.416 5.5 5.5 0 3.775-3.403 6.862-8.552 11.535L12 21.35l-1.449-1.316C5.401 15.36 2 12.273 2 8.498c0-3.084 2.415-5.5 5.5-5.5 1.74 0 3.408.807 4.5 2.086a5.988 5.988 0 0 1 4.5-2.086z"/></svg>')[1];return e.default.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__heart-half-full',dangerouslySetInnerHTML:{__html:g}})},module.exports=a.default});