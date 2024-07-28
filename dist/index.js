"use strict";var o=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var m=o(function(q,s){"use strict";var c=require("@stdlib/math-base-special-ceil"),a=require("@stdlib/assert-is-number").isPrimitive,n=require("@stdlib/math-base-assert-is-nan"),t=require("@stdlib/string-format"),l=require("@stdlib/constants-uint32-max"),g=require("@stdlib/array-base-incrspace");function w(e,r,v){var u,i;if(!a(e)||n(e))throw new TypeError(t("invalid argument. Start must be numeric. Value: `%s`.",e));if(!a(r)||n(r))throw new TypeError(t("invalid argument. Stop must be numeric. Value: `%s`.",r));if(arguments.length<3)i=1;else if(i=v,!a(i)||n(i))throw new TypeError(t("invalid argument. Increment must be numeric. Value: `%s`.",i));if(u=c((r-e)/i),u>l)throw new RangeError("invalid arguments. Generated array exceeds maximum array length.");return g(e,r,i)}s.exports=w});var f=m();module.exports=f;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
