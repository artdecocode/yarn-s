const { _yarnS } = require('./yarn-s')

/**
 * Run Multiple Yarn Commands In Series.
 * @param {!_yarnS.Config} config Options for the program.
 * @param {!Array<string>} config.scripts The scripts to execute.
 * @return {Promise<!Array<{ code: number, stdout: string|undefined, stderr: string|undefined }>>}
 */
function myNewPackge(config) {
  return _yarnS(config)
}

module.exports = myNewPackge

/* typal types/index.xml namespace */
/**
 * @typedef {_yarnS.Config} Config `＠record` Options for the program.
 * @typedef {Object} _yarnS.Config `＠record` Options for the program.
 * @prop {!Array<string>} scripts The scripts to execute.
 */
