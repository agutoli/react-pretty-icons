(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.cursorDefaultOutline=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(g){return g&&g.__esModule?g:{default:g}}(b);a.default=function(){var g=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M10.069 14.266a1 1 0 0 1 1.328.484l2.306 4.987 1.806-.843-2.324-4.985a1 1 0 0 1 .484-1.329l.286-.084 2.298-.447L8 5.124v10.78l1.82-1.473.248-.165zm3.567 7.709a1 1 0 0 1-1.33-.484l-2.18-4.735-2.502 2.026A1 1 0 0 1 6 18V3a1 1 0 0 1 1.643-.766l.01-.012 11.491 9.642a1 1 0 0 1-.445 1.746l-3.16.615 2.206 4.73a1 1 0 0 1-.484 1.33l-3.625 1.69z"/></svg>')[1];return e.default.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__cursor-default-outline',dangerouslySetInnerHTML:{__html:g}})},module.exports=a.default});