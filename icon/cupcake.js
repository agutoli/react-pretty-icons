(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.cupcake=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(g){return g&&g.__esModule?g:{default:g}}(b);a.default=function(){var g=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M12 1.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM15.874 5C18 5 20 7 20 9c2.7 0 2.7 4 0 4H4c-2.7 0-2.7-4 0-4 0-2 2-4 4.126-4a4.002 4.002 0 0 0 7.748 0zM5 15h3l1 7H7l-2-7zm5 0h4l-1 7h-2l-1-7zm6 0h3l-2 7h-2l1-7z"/></svg>')[1];return e.default.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__cupcake',dangerouslySetInnerHTML:{__html:g}})},module.exports=a.default});