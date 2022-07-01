// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ceil@esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-uint32-max@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-incrspace@esm/index.mjs";function m(m,o,d){var h;if(!t(m)||e(m))throw new TypeError(r("00S2s",m));if(!t(o)||e(o))throw new TypeError(r("00S2t",o));if(arguments.length<3)h=1;else if(!t(h=d)||e(h))throw new TypeError(r("00S2u",h));if(s((o-m)/h)>i)throw new RangeError(r("00S06"));return n(m,o,h)}export{m as default};
//# sourceMappingURL=index.mjs.map
