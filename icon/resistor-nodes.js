(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.resistorNodes=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(g){return g&&g.__esModule?g:{default:g}}(b);a.default=function(){var g=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M2 11h1.67a3.001 3.001 0 1 1 5.272 2.743l1.125 1.608L13.11 3.989l1.498 2.139 2.087 2.98L17.5 9c1.306 0 2.418.835 2.83 2H22v2h-1.67a3.001 3.001 0 1 1-5.272-2.743l-1.125-1.608-3.044 11.362-3.585-5.12A3.001 3.001 0 0 1 3.67 13H2v-2zm15.5-.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-11 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/></svg>')[1];return e.default.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__resistor-nodes',dangerouslySetInnerHTML:{__html:g}})},module.exports=a.default});