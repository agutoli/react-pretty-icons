(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.screwdriver=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(g){return g&&g.__esModule?g:{default:g}}(b);a.default=function(){var g=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M18 1.826c-.511 0-1.022.196-1.414.588L8 11l1.5 1.5L6 16H4l-2 4 2 2 4-2v-2l3.5-3.5L13 16l8.586-8.586c.626-.914.783-2.045 0-2.828l-2.172-2.172A1.994 1.994 0 0 0 18 1.826zM18 4l2 2-7 7-2-2 7-7z"/></svg>')[1];return e.default.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__screwdriver',dangerouslySetInnerHTML:{__html:g}})},module.exports=a.default});