(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.emptyShoppingCart=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(g){return g&&g.__esModule?g:{default:g}}(b);a.default=function(){var g=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50.613 50.613"><path d="M49.569 11.145H20.055c-.961 0-1.508.743-1.223 1.661l4.669 13.677c.23.738 1.044 1.336 1.817 1.336h19.35c.773 0 1.586-.598 1.814-1.336l4.069-14c.232-.739-.207-1.338-.982-1.338z"/><circle cx="22.724" cy="43.575" r="4.415"/><circle cx="41.406" cy="43.63" r="4.415"/><path d="M46.707 32.312H20.886L10.549 2.568H2.5a2.5 2.5 0 1 0 0 5h4.493L17.33 37.312h29.377a2.5 2.5 0 1 0 0-5z"/></svg>')[1];return e.default.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__empty-shopping-cart',dangerouslySetInnerHTML:{__html:g}})},module.exports=a.default});