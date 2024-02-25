// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ceil@v0.2.1-esm/index.mjs";import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.2.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-uint32-max@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-incrspace@v0.2.0-esm/index.mjs";function m(m,o,d){var h;if(!e(m)||r(m))throw new TypeError(t("00v2g",m));if(!e(o)||r(o))throw new TypeError(t("00v2h",o));if(arguments.length<3)h=1;else if(!e(h=d)||r(h))throw new TypeError(t("00v2i",h));if(s((o-m)/h)>i)throw new RangeError(t("00v06"));return n(m,o,h)}export{m as default};
//# sourceMappingURL=index.mjs.map
