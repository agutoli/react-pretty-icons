(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.gestureDoubleTap=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(g){return g&&g.__esModule?g:{default:g}}(b);a.default=function(){var g=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M10 9a1 1 0 1 1 2 0v4.47l1.21.13 4.94 2.19c.526.242.86.771.85 1.35v4.36a1.55 1.55 0 0 1-1.5 1.5H11a1.37 1.37 0 0 1-1-.43l-4.9-4.2.74-.77a1 1 0 0 1 .74-.32h.22L10 19V9zm1-4a4 4 0 0 1 2 7.465v-1.229a3 3 0 1 0-4 0v1.229A4 4 0 0 1 11 5zm0-2a6 6 0 0 1 4.158 10.325l-1.003-.446A5 5 0 1 0 9 13.584v1.075A6 6 0 0 1 11 3z"/></svg>')[1];return e.default.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__gesture-double-tap',dangerouslySetInnerHTML:{__html:g}})},module.exports=a.default});