(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.filePdfBox=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M11.432 10.935a14.733 14.733 0 0 1-1.016 2.408c-.197.38-.389.735-.493 1.036l.11-.042v.001a18.33 18.33 0 0 1 3.34-.925 5.378 5.378 0 0 1-.417-.324c-.591-.509-1.114-1.249-1.524-2.154zm6.475 3.813c-.163.194-.47.3-.9.3-.766 0-1.978-.23-2.985-.74-1.745.181-3.031.42-4.048.75-.053.02-.117.044-.184.071-1.243 2.122-2.16 3.07-2.973 3.07a.974.974 0 0 1-.44-.105l-.48-.315-.023-.052a.834.834 0 0 1-.052-.539c.105-.529.653-1.365 1.881-2.118.19-.139.485-.303.89-.49.296-.522.617-1.128.953-1.805.511-1.025.83-2.044 1.087-2.924l-.004-.012c-.368-1.21-.59-1.939-.22-3.265.11-.386.418-.776.795-.776l.236.002c.235 0 .446.084.607.244.66.66.357 2.267.022 3.595l-.035.141c.394 1.128.96 2.035 1.596 2.557.255.202.545.4.862.585.456-.05.892-.074 1.298-.074 1.24 0 1.986.224 2.279.687a.81.81 0 0 1 .123.551.96.96 0 0 1-.285.662zM19 2.998H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-14a2 2 0 0 0-2-2zm-1.488 11.044c-.11-.107-.52-.356-1.917-.356-.069 0-.139 0-.229.1.739.321 1.448.512 1.902.512.07 0 .136-.005.195-.014l.034-.007c.049-.016.08-.03.09-.129a.614.614 0 0 0-.075-.106zM8.33 15.496a3.846 3.846 0 0 0-.476.315c-.716.65-1.16 1.305-1.215 1.693.455-.157 1.043-.813 1.691-2.008zm3.016-6.905l.054-.038c.074-.324.122-.6.162-.823l.03-.163c.097-.54.084-.853-.098-1.095l-.148-.05c-.019.03-.048.072-.067.118-.167.415-.16 1.15.067 2.051z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__file-pdf-box '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});