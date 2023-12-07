const { Ktcs } = require('../index')
const config = require('dotenv').config().parsed
const ktcs = new Ktcs()
ktcs.setConfig(Object.assign({ debug: true }, config))
ktcs.getWxCfEnv(config.app, config.env, config.envToken, 'test').then(console.log)