(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.deleteRestore=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(g){return g&&g.__esModule?g:{default:g}}(b);a.default=function(){var g=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M14.016 14.016h1.968L12 9.984l-3.984 4.032h1.968V18h4.032v-3.984zM6 6.984h12v12c0 .532-.203 1-.61 1.407-.406.406-.874.609-1.406.609H8.016c-.532 0-1-.203-1.407-.61-.406-.406-.609-.874-.609-1.406v-12zm12.984-3V6H5.016V3.984h3.468L9.516 3h4.968l1.032.984h3.468z"/></svg>')[1];return e.default.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__delete-restore',dangerouslySetInnerHTML:{__html:g}})},module.exports=a.default});