(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.vectorSelection=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(g){return g&&g.__esModule?g:{default:g}}(b);a.default=function(){var g=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M3 1h2v2H3v2H1V3a2 2 0 0 1 2-2zm11 0a2 2 0 0 1 2 2v2h-2V3h-2V1h2zm6 6a2 2 0 0 1 2 2v2h-2V9h-2V7h2zm2 13a2 2 0 0 1-2 2h-2v-2h2v-2h2v2zm-2-7h2v3h-2v-3zm-7-4V7h3v3h-2V9h-1zm0 13v-2h3v2h-3zm-4 0a2 2 0 0 1-2-2v-2h2v2h2v2H9zm-2-6v-3h2v1h1v2H7zM7 3V1h3v2H7zM3 16a2 2 0 0 1-2-2v-2h2v2h2v2H3zM1 7h2v3H1V7zm8 0h2v2H9v2H7V9a2 2 0 0 1 2-2zm7 7a2 2 0 0 1-2 2h-2v-2h2v-2h2v2z"/></svg>')[1];return e.default.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__vector-selection',dangerouslySetInnerHTML:{__html:g}})},module.exports=a.default});