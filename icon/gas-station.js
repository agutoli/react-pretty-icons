(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.gasStation=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(g){return g&&g.__esModule?g:{default:g}}(b);a.default=function(){var g=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M18 9.998a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-6 0H6v-5h6m7.767 2.232l.012-.012-3.72-3.72L15 4.56l2.11 2.11A2.496 2.496 0 1 0 19 11.286v7.211a1 1 0 0 1-2 0v-4.5a2 2 0 0 0-2-2h-1v-7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v16h10v-7.5h1.5v5a2.5 2.5 0 1 0 5 0v-9.5c0-.69-.28-1.315-.732-1.768z"/></svg>')[1];return e.default.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__gas-station',dangerouslySetInnerHTML:{__html:g}})},module.exports=a.default});