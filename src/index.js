import { c } from 'erte'

/**
 * Run Multiple Yarn Commands In Series.
 * @param {!_yarnS.Config} [config] Options for the program.
 * @param {boolean} [config.shouldRun=true] A boolean option. Default `true`.
 * @param {string} [config.text] A text to return.
 */
export default async function yarnS(config = {}) {
  const {
    shouldRun = true,
    text = '',
  } = config
  if (!shouldRun) return
  console.log('yarn-s called with %s', c(text, 'yellow'))
  return text
}

/**
 * @typedef {import('../types').Config} _yarnS.Config
 */
