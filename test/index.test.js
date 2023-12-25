const getWxEnv = require('./wxEnv.test')
const getWxToken = require('./wxToken.test')
const getTencentKey = require('./tencentKey.test')

if (process.argv[2]) {
    return require(`./${process.argv[2]}.test`).test()
}

;(async ()=>{
    console.log('getWxToken test\n')
    await getWxToken.test()
    console.log('getWxEnv test\n')
    await getWxEnv.test()
    console.log('getTencentKey test\n')
    await getTencentKey.test()
})()


