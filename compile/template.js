const { _yarnS } = require('./yarn-s')

/**
 * @methodType {_yarnS.yarnS}
 */
function myNewPackge(config) {
  return _yarnS(config)
}

module.exports = myNewPackge

/* typal types/index.xml namespace */
