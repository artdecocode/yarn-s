const { _yarnS } = require('./yarn-s')

/**
 * Run Multiple Yarn Commands In Series.
 * @param {!_yarnS.Config} config Options for the program.
 * @param {boolean} [config.shouldRun=true] A boolean option. Default `true`.
 * @param {string} [config.text] A text to return.
 * @return {Promise<string>}
 */
function myNewPackge(config) {
  return _yarnS(config)
}

module.exports = myNewPackge

/* typal types/index.xml namespace */
/**
 * @typedef {_yarnS.Config} Config `＠record` Options for the program.
 * @typedef {Object} _yarnS.Config `＠record` Options for the program.
 * @prop {boolean} [shouldRun=true] A boolean option. Default `true`.
 * @prop {string} [text] A text to return.
 */
