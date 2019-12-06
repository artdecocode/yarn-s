import yarnS from '../src'

(async () => {
  const res = await yarnS({
    scripts: ['pass'],
  })
  console.log(res)
})()