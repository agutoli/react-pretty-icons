(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.garageAlert=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(g){return g&&g.__esModule?g:{default:g}}(b);a.default=function(){var g=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M17 20h-2v-9H5v9H3V9l7-4 7 4v11zM6 12h8v2H6v-2zm0 3h8v2H6v-2zm13 0v-5h2v5h-2zm0 4v-2h2v2h-2z"/></svg>')[1];return e.default.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__garage-alert',dangerouslySetInnerHTML:{__html:g}})},module.exports=a.default});