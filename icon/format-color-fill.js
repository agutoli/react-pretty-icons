(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.formatColorFill=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(g){return g&&g.__esModule?g:{default:g}}(b);a.default=function(){var g=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M19 11.499s-2 2.167-2 3.5a2 2 0 0 0 4 0c0-1.333-2-3.5-2-3.5zm-13.794-1.5L10 5.207l4.793 4.792m1.768-1.061L7.62-.001 6.206 1.413l2.38 2.379-5.148 5.146a1.502 1.502 0 0 0 0 2.122l5.5 5.5c.293.293.677.439 1.061.439.384 0 .768-.146 1.061-.439l5.5-5.5a1.502 1.502 0 0 0 0-2.122z"/></svg>')[1];return e.default.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__format-color-fill',dangerouslySetInnerHTML:{__html:g}})},module.exports=a.default});