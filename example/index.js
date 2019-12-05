import yarnS from '../src'

(async () => {
  const res = await yarnS({
    text: 'example',
  })
  console.log(res)
})()