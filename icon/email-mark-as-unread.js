(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.emailMarkAsUnread=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(g){return g&&g.__esModule?g:{default:g}}(b);a.default=function(){var g=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M18.844 6.984h-2.625l-5.719-3-6.516 3.422L4 17a2 2 0 0 1-2-2l.016-7.828c0-.656.265-1.11.796-1.36L10.5 2.017l7.547 3.796c.469.282.734.672.797 1.172zM7 8h13a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2zm13.016 3.672V9.984L13.5 13.313l-6.516-3.33v1.688L13.5 15l6.516-3.328z"/></svg>')[1];return e.default.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__email-mark-as-unread',dangerouslySetInnerHTML:{__html:g}})},module.exports=a.default});