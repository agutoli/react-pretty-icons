(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.spray=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(g){return g&&g.__esModule?g:{default:g}}(b);a.default=function(){var g=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M10 4h2v2h-2V4zM7 3h2v2H7V3zm0 3h2v2H7V6zM6 8v2H4V8h2zm0-3v2H4V5h2zm0-3v2H4V2h2zm7 20a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2V7h1V4h3v3h1v1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5zm0-12v10h5V10h-5z"/></svg>')[1];return e.default.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__spray',dangerouslySetInnerHTML:{__html:g}})},module.exports=a.default});