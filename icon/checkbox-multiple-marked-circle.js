(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.checkboxMultipleMarkedCircle=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(g){return g&&g.__esModule?g:{default:g}}(b);a.default=function(){var g=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M13.999 2.002A7.995 7.995 0 0 0 6 10a7.995 7.995 0 0 0 8 7.997c4.418 0 8.004-3.578 8.004-7.997 0-4.419-3.585-7.998-8.004-7.998zM4.926 5.82A7.998 7.998 0 0 0 10 20a8.067 8.067 0 0 0 1.88-.235 10.013 10.013 0 0 1-4.708-2.475A6 6 0 0 1 4 12.003a6.93 6.93 0 0 1 .073-.894A10.563 10.563 0 0 1 4 10c.005-1.445.322-2.871.927-4.18zm13.16.264L19.503 7.5l-6.505 6.499-3.79-3.794 1.417-1.411 2.373 2.377"/></svg>')[1];return e.default.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__checkbox-multiple-marked-circle',dangerouslySetInnerHTML:{__html:g}})},module.exports=a.default});