const getWxEnv = require('./wxEnv.test')
const getWxToken = require('./wxToken.test')
console.log(process.argv)
if (process.argv[2]) {
    return require(`./${process.argv[2]}.test`).test()
}

;(async ()=>{
    await getWxToken.test()
    await getWxEnv.test()
})()


