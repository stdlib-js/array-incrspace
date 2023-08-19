"use strict";var o=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var m=o(function(q,s){
var c=require('@stdlib/math-base-special-ceil/dist'),a=require('@stdlib/assert-is-number/dist').isPrimitive,n=require('@stdlib/math-base-assert-is-nan/dist'),t=require('@stdlib/error-tools-fmtprodmsg/dist'),l=require('@stdlib/constants-uint32-max/dist'),g=require('@stdlib/array-base-incrspace/dist');function w(e,r,v){var u,i;if(!a(e)||n(e))throw new TypeError(t('00v2g',e));if(!a(r)||n(r))throw new TypeError(t('00v2h',r));if(arguments.length<3)i=1;else if(i=v,!a(i)||n(i))throw new TypeError(t('00v2i',i));if(u=c((r-e)/i),u>l)throw new RangeError(format('00v06'));return g(e,r,i)}s.exports=w
});var f=m();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
