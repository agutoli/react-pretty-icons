(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.mapLegend=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(g){return g&&g.__esModule?g:{default:g}}(b);a.default=function(){var g=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M9 3L3.36 4.9c-.21.07-.36.25-.36.48V20.5a.5.5 0 0 0 .5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5a.5.5 0 0 0-.5-.5l-.16.03L15 5.1 9 3zM8 5.45v11.7l-3 1.16V6.46l3-1.01zm2 .02l4 1.4v11.66l-4-1.4V5.47zm9 .23v11.84l-3 1.01V6.86l3-1.16zm-11.541.605L5.57 6.97v2.146l1.889-.664V6.305zm0 2.75L5.57 9.72v2.146l1.889-.664V9.055zm0 2.75l-1.889.666v2.146l1.889-.664v-2.148zm0 2.75l-1.889.666v2.146l1.889-.664v-2.148z"/></svg>')[1];return e.default.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__map-legend',dangerouslySetInnerHTML:{__html:g}})},module.exports=a.default});