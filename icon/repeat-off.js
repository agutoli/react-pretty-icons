(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.repeatOff=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(g){return g&&g.__esModule?g:{default:g}}(b);a.default=function(){var g=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M2 5.268L3.277 4 20 20.723 18.732 22l-3-3H7v3l-4-4 4-4v3h6.732L7 10.268V11H5V8.268l-3-3zM17 13h2v4.177l-2-2V13zm0-8V2l4 4-4 4V7H8.823l-2-2H17z"/></svg>')[1];return e.default.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__repeat-off',dangerouslySetInnerHTML:{__html:g}})},module.exports=a.default});