(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.gestureSwipeHorizontal=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(g){return g&&g.__esModule?g:{default:g}}(b);a.default=function(){var g=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M6 1L3 4l3 3V5h3v2l3-3-3-3v2H6V1zm5 7a1 1 0 0 0-1 1v10l-3.2-1.72h-.22c-.28 0-.55.11-.74.32l-.74.77 4.9 4.2c.26.28.62.43 1 .43h6.5c.82-.03 1.47-.68 1.5-1.5v-4.36c0-.58-.32-1.11-.85-1.35l-4.94-2.19-1.21-.13V9a1 1 0 0 0-1-1z"/></svg>')[1];return e.default.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__gesture-swipe-horizontal',dangerouslySetInnerHTML:{__html:g}})},module.exports=a.default});