(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.televisionGuide=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(g){return g&&g.__esModule?g:{default:g}}(b);a.default=function(){var g=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M21 17V5H3v12h18zm0-14c1.1 0 2 .9 2 2l-.01 12c0 1.1-.89 2-1.99 2h-5v2H8v-2H3c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h18zM5 7h6v4H5V7zm0 6h6v2H5v-2zm8-6h6v2h-6V7zm0 4h6v4h-6v-4z"/></svg>')[1];return e.default.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__television-guide',dangerouslySetInnerHTML:{__html:g}})},module.exports=a.default});