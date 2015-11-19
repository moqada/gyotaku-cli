# gyotaku-cli

[![NPM version][npm-image]][npm-url]
[![NPM downloads][npm-download-image]][npm-download-url]
[![Build Status][travis-image]][travis-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![DevDependency Status][daviddm-dev-image]][daviddm-dev-url]
[![License][license-image]][license-url]

CLI for Web GYOTAKU ([ウェブ魚拓](http://megalodon.jp/)).

Unofficial and Implemented by dirty scraping...


## Installation

```
npm install -g gyotaku-cli
```


## Usage

```
Usage: gyotaku [options] <URL>

Options:
  -l, --list  Listing GYOTAKU urls  [boolean]
  --help      Show help  [boolean]
  --version   Show version number  [boolean]

Examples:
  gyotaku http://example.com/     Take GYOTAKU of specific url
  gyotaku -l http://example.com/  List GYOTAKU urls for specific url
```


## Related

- [gyotaku](https://github.com/moqada/gyotaku) - API for this module


[npm-url]: https://www.npmjs.com/package/gyotaku-cli
[npm-image]: https://img.shields.io/npm/v/gyotaku-cli.svg?style=flat-square
[npm-download-url]: https://www.npmjs.com/package/gyotaku-cli
[npm-download-image]: https://img.shields.io/npm/dt/gyotaku-cli.svg?style=flat-square
[travis-url]: https://travis-ci.org/moqada/gyotaku-cli
[travis-image]: https://img.shields.io/travis/moqada/gyotaku-cli.svg?style=flat-square
[daviddm-url]: https://david-dm.org/moqada/gyotaku-cli
[daviddm-image]: https://img.shields.io/david/moqada/gyotaku-cli.svg?style=flat-square
[daviddm-dev-url]: https://david-dm.org/moqada/gyotaku-cli#info=devDependencies
[daviddm-dev-image]: https://img.shields.io/david/dev/moqada/gyotaku-cli.svg?style=flat-square
[license-url]: http://opensource.org/licenses/MIT
[license-image]: https://img.shields.io/npm/l/gyotaku-cli.svg?style=flat-square
