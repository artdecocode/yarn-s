# yarn-s

[![npm version](https://badge.fury.io/js/yarn-s.svg)](https://www.npmjs.com/package/yarn-s)

`yarn-s` is Run Multiple Yarn Commands In Series.

```sh
yarn add yarn-s
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`async yarnS(config: !Config): !Array<!ScriptResult>`](#async-yarnsconfig-config-arrayscriptresult)
  * [`Config`](#type-config)
  * [`ScriptResult`](#type-scriptresult)
- [CLI](#cli)
- [Copyright & License](#copyright--license)

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/0.svg?sanitize=true">
</a></p>

## API

The package is available by importing its default function:

```js
import yarnS from 'yarn-s'
```

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/1.svg?sanitize=true">
</a></p>

## <code>async <ins>yarnS</ins>(</code><sub><br/>&nbsp;&nbsp;`config: !Config,`<br/></sub><code>): <i>!Array<!ScriptResult></i></code>
Run Multiple Yarn Commands In Series.

 - <kbd><strong>config*</strong></kbd> <em><code><a href="#type-config" title="Options for the program.">!Config</a></code></em>: The config.

__<a name="type-config">`Config`</a>__: Options for the program.


|     Name     |             Type              |       Description       |
| ------------ | ----------------------------- | ----------------------- |
| __scripts*__ | <em>!Array&lt;string&gt;</em> | The scripts to execute. |


__<a name="type-scriptresult">`ScriptResult`</a>__: The result of a script.


|    Name     |      Type       |        Description         |
| ----------- | --------------- | -------------------------- |
| __code*__   | <em>number</em> | The exit code.             |
| __stdout*__ | <em>string</em> | The stdout of the program. |
| __stderr*__ | <em>string</em> | The stderr of the program. |

```js
import yarnS from 'yarn-s'

(async () => {
  const res = await yarnS({
    scripts: ['pass'],
  })
  console.log(res)
})()
```
```
$ node test/fixture/pass
this file is fine
[ { code: 0,
    stdout: '$ node test/fixture/pass\nthis file is fine\n',
    stderr: '' } ]
```

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/2.svg?sanitize=true">
</a></p>

## CLI

The package can also be used from the CLI.

<table>
 <thead>
  <tr>
   <th>Argument</th> 
   <th>Short</th>
   <th>Description</th>
  </tr>
 </thead>
  <tr>
   <td>scripts</td>
   <td></td>
   <td>The scripts to execute in series.</td>
  </tr>
  <tr>
   <td>--help</td>
   <td>-h</td>
   <td>Print the help information and exit.</td>
  </tr>
  <tr>
   <td>--version</td>
   <td>-v</td>
   <td>Show the version's number and exit.</td>
  </tr>
</table>

```
Run Multiple Yarn Commands In Series.

  yarn-s script[,script,...]

	scripts      	The scripts to execute in series.
	--help, -h   	Print the help information and exit.
	--version, -v	Show the version's number and exit.

  Example:

    yarn-s script-1 script-2
```

The program will exit with status code 1 if one of the scripts exited with non-zero code.

<table>
<tr><th>pass</th><th>fail</th></tr>
<tr><td>

```js
process.stdout.write('this file is fine\n')
```
</td>
<td>

```js
process.stdout.write('hello wor')
process.exit(1)
```
</td></tr>
</table>

**yarn-s pass fail**

```
$ node test/fixture/pass
this file is fine
$ node test/fixture/fail
hello worinfo Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
Command "fail" existed with code 1
```

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/3.svg?sanitize=true">
</a></p>

## Copyright & License

GNU Affero General Public License v3.0

<table>
  <tr>
    <td><img src="https://avatars3.githubusercontent.com/u/38815725?v=4&amp;s=100" alt="artdecocode"></td>
    <td>© <a href="https://www.artd.eco">Art Deco™</a> 2020</td>
  </tr>
</table>

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/-1.svg?sanitize=true">
</a></p>