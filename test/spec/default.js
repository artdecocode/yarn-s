import { equal, throws } from '@zoroaster/assert'
import Context from '../context'
import yarnS from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof yarnS, 'function')
  },
  async 'calls package without error'() {
    await throws({
      fn: yarnS,
    })
  },
}

export default T