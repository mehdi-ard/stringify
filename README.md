[![npm (scoped with tag)](https://img.shields.io/npm/v/stringify-numbers/latest.svg?style=flat-square)](https://www.npmjs.com/package/stringify-numbers)

# Stringify Numbers

It is a package for converting numbers to letters, which currently only supports the Persian language, and other languages will be added in the future.

# Installation

`npm i stringify-numbers`

# Usage

```js
import { stringifyFa } from 'stringify-numbers';

stringifyFa(125325652)

//return دوازده میلیون و پانصد و سی و دو هزار و پانصد و شصت و پنج

```
# Use different modes

### Use Toman

```js
import { stringifyTomans } from 'stringify-numbers';

stringifyTomans(125325652)

//return دوازده میلیون و پانصد و سی و دو هزار و پانصد و شصت و پنج تومان

```

### Use Rial

```js
import { stringifyRials } from 'stringify-numbers';

stringifyTomans(125325652)

//return یکصد و بیست و پنج میلیون و سیصد و بیست و پنج هزار و ششصد و پنجاه و دو ریال
```
