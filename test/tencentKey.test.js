const { Ktcs } = require('../index')
const config = require('dotenv').config().parsed

exports.test = async ()=>{
    const ktcs = new Ktcs()
    ktcs.setConfig(Object.assign({ debug: true }, config))
    const key = await ktcs.getTencentKey(config.app, 'dev-test')
    console.log(key)
}