(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.headphonesSettings=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(g){return g&&g.__esModule?g:{default:g}}(b);a.default=function(){var g=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M12 .998a9 9 0 0 1 9 9v7a3 3 0 0 1-3 3h-3v-8h4v-2a7 7 0 1 0-14 0v2h4v8H6a3 3 0 0 1-3-3v-7a9 9 0 0 1 9-9zM15 24v-2h2v2h-2zm-4 0v-2h2v2h-2zm-4 0v-2h2v2H7z"/></svg>')[1];return e.default.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__headphones-settings',dangerouslySetInnerHTML:{__html:g}})},module.exports=a.default});