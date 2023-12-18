const { Ktcs } = require('../index')
const config = require('dotenv').config().parsed

exports.test = async ()=>{
    const ktcs = new Ktcs()
    ktcs.setConfig(Object.assign({ debug: true }, config))
    const keys = await ktcs.getWxCfEnv(config.app, config.env, config.envToken, 'dev-test')
    console.log(keys)
}