// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.1-esm/index.mjs";import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.1-esm/index.mjs";import{factory as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-contains@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-last@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-last-code-point@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-last-grapheme-cluster@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";var l=["grapheme","code_point","code_unit"],p={grapheme:d,code_point:o,code_unit:n},h=i(l);function j(i){var n,o,d,j;if(!e(i))throw new TypeError(m("null3F",i));if(d={mode:"grapheme"},1===(o=arguments.length))j=1;else if(2===o){if(t(j=arguments[1]))n=j,j=1;else if(!s(j))throw new TypeError(m("null3X",j))}else{if(!s(j=arguments[1]))throw new TypeError(m("null3X",j));if(!t(n=arguments[2]))throw new TypeError(m("null2V",n))}if(n&&r(n,"mode")&&(d.mode=n.mode,!h(d.mode)))throw new TypeError(m("nullE1","mode",l.join('", "'),d.mode));return p[d.mode](i,j)}export{j as default};
//# sourceMappingURL=index.mjs.map