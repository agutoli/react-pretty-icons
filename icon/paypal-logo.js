(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.paypalLogo=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(g){return g&&g.__esModule?g:{default:g}}(b);a.default=function(){var g=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90"><path d="M58.057 0H18.649L1.189 80.146h23.124l5.664-26.558h16.521c15.803 0 29.019-9.744 32.562-26.312C83.064 8.521 69.612 0 58.057 0zM40.816 38.242H33.28l4.953-21.924h11.326c3.885 0 6.827 2.314 7.794 5.712-.496-.086-.956-.235-1.498-.235H44.53l-3.714 16.447zm16.531-10.964c-1.379 5.95-7.033 10.698-12.79 10.921l2.711-12.023h10.267c-.062.367-.087.721-.188 1.102zm28.008 5.476c1.326-6.211.711-11.275-1.086-15.306 3.748 4.47 5.688 10.955 3.824 19.687-3.543 16.566-16.761 26.31-32.561 26.31h-16.52L33.349 90H10.223l.96-4.381h19.428l5.663-26.555h16.521c15.802 0 29.018-9.744 32.56-26.31z"/></svg>')[1];return e.default.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__paypal-logo',dangerouslySetInnerHTML:{__html:g}})},module.exports=a.default});