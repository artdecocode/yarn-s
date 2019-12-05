import { equal, ok } from '@zoroaster/assert'
import Context from '../context'
import yarnS from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof yarnS, 'function')
  },
  async 'calls package without error'() {
    await yarnS()
  },
  async 'gets a link to the fixture'({ fixture }) {
    const text = fixture`text.txt`
    const res = await yarnS({
      text,
    })
    ok(res, text)
  },
}

export default T