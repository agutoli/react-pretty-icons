(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.powerPlugOff=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(g){return g&&g.__esModule?g:{default:g}}(b);a.default=function(){var g=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M8 3v3.18c3.1 3.05 6.1 6.12 9.2 9.12.2-.3.6-.5.8-.9V8.8c0-1.12-1.3-1.64-2-1.96V3h-2v4h-4V3H8zM3.28 4c-.43.42-.85.85-1.28 1.27l4 4v5.21c1.17 1.17 2.33 2.35 3.5 3.52v3h5v-3c.222-.268.447.332.67.438 1.2 1.2 2.3 2.4 3.5 3.6.5-.4.9-.9 1.3-1.3-5.6-5.6-11.2-11.1-16.7-16.7L3.28 4z"/></svg>')[1];return e.default.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__power-plug-off',dangerouslySetInnerHTML:{__html:g}})},module.exports=a.default});