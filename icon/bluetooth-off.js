(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.bluetoothOff=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(g){return g&&g.__esModule?g:{default:g}}(b);a.default=function(){var g=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M12.998 5.83l1.88 1.88-1.597 1.601 1.412 1.406L17.71 7.7l-5.708-5.697h-1V7.03l1.995 1.998M5.41 3.999L3.999 5.41l6.592 6.592L5 17.587 6.411 19l4.59-4.59v7.594h1.002l4.286-4.293 2.3 2.29L20 18.589m-7.002-.42v-3.76l1.88 1.88"/></svg>')[1];return e.default.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__bluetooth-off',dangerouslySetInnerHTML:{__html:g}})},module.exports=a.default});