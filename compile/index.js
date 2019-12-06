const { _yarnS } = require('./yarn-s')

/**
 * Run Multiple Yarn Commands In Series.
 * @param {!_yarnS.Config} config Options for the program.
 * @param {!Array<string>} config.scripts The scripts to execute.
 * @return {Promise<!Array<!_yarnS.ScriptResult>>}
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
 * @typedef {_yarnS.ScriptResult} ScriptResult `＠record` The result of a script.
 * @typedef {Object} _yarnS.ScriptResult `＠record` The result of a script.
 * @prop {number} code The exit code.
 * @prop {string} stdout The stdout of the program.
 * @prop {string} stderr The stderr of the program.
 */
