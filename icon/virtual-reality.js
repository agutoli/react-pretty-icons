(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.virtualReality=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(g){return g&&g.__esModule?g:{default:g}}(b);a.default=function(){var g=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5zm1 6h1.5l1 3.43L9.5 9H11l-1.75 6h-1.5L6 9zm7 0h3.5c.85 0 1.5.65 1.5 1.5v1c0 .6-.4 1.15-.9 1.4L18 15h-1.5l-.85-2H14.5v2H13V9zm1.5 1.5v1h2v-1h-2z"/></svg>')[1];return e.default.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__virtual-reality',dangerouslySetInnerHTML:{__html:g}})},module.exports=a.default});