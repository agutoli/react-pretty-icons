(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.seatFlat=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(g){return g&&g.__esModule?g:{default:g}}(b);a.default=function(){var g=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M22.003 11.001v1.997H8.999V7.003h8.998A3.999 3.999 0 0 1 22.003 11zM2.003 14v2h5.994v1.996h8.004V16h6.002v-2M7.139 12.1A2.995 2.995 0 0 0 7.1 7.861a2.995 2.995 0 0 0-4.239.039 2.995 2.995 0 0 0 .039 4.239 2.995 2.995 0 0 0 4.239-.039z"/></svg>')[1];return e.default.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__seat-flat',dangerouslySetInnerHTML:{__html:g}})},module.exports=a.default});