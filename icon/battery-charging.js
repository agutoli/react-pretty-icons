(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.batteryCharging=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(g){return g&&g.__esModule?g:{default:g}}(b);a.default=function(){var g=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M16.669 3.999h-1.67V2.002H9V4H7.33c-.732 0-1.327.601-1.327 1.333V20.66c0 .742.595 1.344 1.327 1.344h9.329c.742 0 1.344-.602 1.344-1.334V5.332A1.34 1.34 0 0 0 16.669 4zM11 20v-5.498H9l3.998-7.5V12.5H15"/></svg>')[1];return e.default.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__battery-charging',dangerouslySetInnerHTML:{__html:g}})},module.exports=a.default});