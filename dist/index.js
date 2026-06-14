"use strict";var o=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw r=0,a}}};var v=o(function(q,m){"use strict";var c=require("@stdlib/math-base-special-ceil"),n=require("@stdlib/assert-is-number").isPrimitive,t=require("@stdlib/math-base-assert-is-nan"),u=require("@stdlib/string-format"),l=require("@stdlib/constants-uint32-max"),g=require("@stdlib/array-base-incrspace");function w(e,r,a){var s,i;if(!n(e)||t(e))throw new TypeError(u("invalid argument. Start must be numeric. Value: `%s`.",e));if(!n(r)||t(r))throw new TypeError(u("invalid argument. Stop must be numeric. Value: `%s`.",r));if(arguments.length<3)i=1;else if(i=a,!n(i)||t(i))throw new TypeError(u("invalid argument. Increment must be numeric. Value: `%s`.",i));if(s=c((r-e)/i),s>l)throw new RangeError("invalid arguments. Generated array exceeds maximum array length.");return g(e,r,i)}m.exports=w});var f=v();module.exports=f;
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
