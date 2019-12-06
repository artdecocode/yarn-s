import makeTestSuite from '@zoroaster/mask'
import Context from '../context'
import yarnS from '../../src'

export default makeTestSuite('test/result/default', {
  async getResults() {
    const res = await yarnS({
      scripts: this.input.split(' '),
    })
    return JSON.stringify(res)
  },
  // getThrowsConfig() {
  //   return {
  //     fn: yarnS,
  //     args: {
  //       scripts: this.input.split(' '),
  //     },
  //   }
  // },
  context: Context,
})