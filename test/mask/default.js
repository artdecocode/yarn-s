import makeTestSuite from '@zoroaster/mask'
import Context from '../context'
import yarnS from '../../src'

export default makeTestSuite('test/result', {
  async getResults() {
    const res = await yarnS({
      text: this.input,
    })
    return res
  },
  context: Context,
})