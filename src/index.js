import { c as co } from 'erte'
import spawn from 'spawncommand'

const run = (a) => {
  const proc = spawn('yarn', [a], {
    shell: process.platform == 'win32',
  })
  proc.stdout.pipe(process.stdout)
  proc.stderr.pipe(process.stderr)
  const { promise } = proc
  return { proc, promise }
}

/**
 * Run Multiple Yarn Commands In Series.
 * @param {!_yarnS.Config} config Options for the program.
 */
export default async function yarnS(config) {
  if (!config) throw new Error('Config is expected')
  const { scripts = [] } = config
  return await scripts
    .reduce(async (acc, command) => {
      acc = await acc
      const { promise } = run(command)
      const c = await promise
      const { code } = c
      if (code) {
        const err = new Error(`Command "${co(command, 'yellow')}" existed with code ${co(code, 'red')}`)
        err.code = code
        throw err
      }

      return [...acc, c]
    }, [])
}

/**
 * @typedef {import('..').Config} _yarnS.Config
 */
