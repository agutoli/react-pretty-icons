(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.metronomeTick=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(g){return g&&g.__esModule?g:{default:g}}(b);a.default=function(){var g=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M12 1.75l-3.426.918-4.506 16.814A3.705 3.705 0 0 0 4 20c0 1.108.892 2 2 2h12c1.108 0 2-.892 2-2a3.84 3.84 0 0 0-.068-.518L15.426 2.668 12 1.75zM10.287 4h3.426l3.482 13H13v-5h-2v5H6.805l3.482-13zM11 5v4h-1v2h4V9h-1V5h-2z"/></svg>')[1];return e.default.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__metronome-tick',dangerouslySetInnerHTML:{__html:g}})},module.exports=a.default});