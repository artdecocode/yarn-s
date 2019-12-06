import { _help, _version, _scripts, argsConfig } from './get-args'
import { reduceUsage } from 'argufy'
import usually from 'usually'
import { c } from 'erte'
import Init from './commands/init'
import yarnS from '../'

if (_help) {
  const usage = usually({
    description: 'Run Multiple Yarn Commands In Series.',
    example: 'yarn-s script-1 script-2',
    line: 'yarn-s script[,script,...]',
    usage: reduceUsage(argsConfig),
  })
  console.log(usage)
  process.exit(0)
} else if (_version) {
  console.log(require('../../package.json').version)
  process.exit(0)
}

(async () => {
  try {
    if (!_scripts || !_scripts.length)
      throw new Error('Please pass at least one command.')
    await yarnS({
      scripts: /** @type {!Array<string>} */ (_scripts),
    })
  } catch (err) {
    if (process.env['DEBUG']) console.error(err.stack)
    else console.log(err.message)
    process.exit(err.code)
  }
})()