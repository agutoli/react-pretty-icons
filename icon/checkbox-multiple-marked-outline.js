(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.checkboxMultipleMarkedOutline=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(g){return g&&g.__esModule?g:{default:g}}(b);a.default=function(){var g=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M20 15.998v-6h2v6a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-12a2 2 0 0 1 2-2h8v2H8V16h12zm-9.087-8.914L14 10.17l6.586-6.586L22 4.998l-8 8-4.5-4.5 1.414-1.414zM16 20v2H4a2 2 0 0 1-2-2V7h2v13.001L16 20z"/></svg>')[1];return e.default.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__checkbox-multiple-marked-outline',dangerouslySetInnerHTML:{__html:g}})},module.exports=a.default});