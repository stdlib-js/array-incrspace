<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Incrspace

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Generate a linearly spaced numeric array using a provided increment.



<section class="usage">

## Usage

```javascript
import incrspace from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-incrspace@esm/index.mjs';
```
The previous example will load the latest bundled code from the esm branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/array-incrspace/tags). For example,

```javascript
import incrspace from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-incrspace@v0.2.0-esm/index.mjs';
```

#### incrspace( start, stop\[, increment] )

Generates a linearly spaced numeric `array`. If an `increment` is not provided, the default `increment` is `1`.

```javascript
var arr = incrspace( 0, 11, 2 );
// returns [ 0, 2, 4, 6, 8, 10 ]
```

</section>

<!-- /.usage -->

<section class="notes">

### Notes

-   The output `array` is guaranteed to include the `start` value but does **not** include the `stop` value. Beware that values subsequent to the `start` value are subject to floating-point errors. Hence,

    ```javascript
    var arr = incrspace( 0.1, 0.5, 0.2 );
    // returns [ 0.1, ~0.3 ]
    ```

    where `arr[1]` is only guaranteed to be approximately equal to `0.3`.

    If you desire more control over element precision, consider using [roundn][@stdlib/math/base/special/roundn]:

    ```javascript
    import roundn from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-roundn@esm/index.mjs';
    var arr;
    var out;
    var i;

    // Create an array subject to floating-point errors:
    arr = incrspace( 0, 1.01, 0.02 );

    // Round each value to the nearest hundredth:
    out = [];
    for ( i = 0; i < arr.length; i++ ) {
        out.push( roundn( arr[ i ], -2 ) );
    }

    console.log( out.join( '\n' ) );
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import incrspace from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-incrspace@esm/index.mjs';
var out;

// Default behavior:
console.log( '\nDefault:' );
out = incrspace( 0, 10 );
console.log( out.join( '\n' ) );

// Specify increment:
console.log( '\nIncrement 2:' );
out = incrspace( 0, 10, 2 );
console.log( out.join( '\n' ) );

console.log( '\nIncrement 2:' );
out = incrspace( 0, 11, 2 );
console.log( out.join( '\n' ) );

console.log( '\nIncrement 0.02:' );
out = incrspace( 0, 1.01, 0.02 );
console.log( out.join( '\n' ) );

// Create an array using a negative increment:
console.log( '\nDecremented values:' );
out = incrspace( 10, 0, -2 );
console.log( out.join( '\n' ) );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/array-linspace`][@stdlib/array/linspace]</span><span class="delimiter">: </span><span class="description">generate a linearly spaced array over a specified interval.</span>
-   <span class="package-name">[`@stdlib/array-logspace`][@stdlib/array/logspace]</span><span class="delimiter">: </span><span class="description">generate a logarithmically spaced numeric array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-incrspace.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-incrspace

[test-image]: https://github.com/stdlib-js/array-incrspace/actions/workflows/test.yml/badge.svg?branch=v0.2.0
[test-url]: https://github.com/stdlib-js/array-incrspace/actions/workflows/test.yml?query=branch:v0.2.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-incrspace/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-incrspace?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-incrspace.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-incrspace/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/array-incrspace/tree/deno
[deno-readme]: https://github.com/stdlib-js/array-incrspace/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/array-incrspace/tree/umd
[umd-readme]: https://github.com/stdlib-js/array-incrspace/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/array-incrspace/tree/esm
[esm-readme]: https://github.com/stdlib-js/array-incrspace/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/array-incrspace/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-incrspace/main/LICENSE

[@stdlib/math/base/special/roundn]: https://github.com/stdlib-js/math-base-special-roundn/tree/esm

<!-- <related-links> -->

[@stdlib/array/linspace]: https://github.com/stdlib-js/array-linspace/tree/esm

[@stdlib/array/logspace]: https://github.com/stdlib-js/array-logspace/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
