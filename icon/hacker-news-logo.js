(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.hackerNewsLogo=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(g){return g&&g.__esModule?g:{default:g}}(b);a.default=function(){var g=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 430.117 430.118"><path d="M0 0v430.118h430.117V0H0zm234.175 248.167v105.485h-38.232V248.167L101.985 62.128h44.265l68.713 140.07 71.446-140.07h41.499l-93.733 186.039z"/></svg>')[1];return e.default.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__hacker-news-logo',dangerouslySetInnerHTML:{__html:g}})},module.exports=a.default});