const { Ktcs } = require('../index')
const config = require('dotenv').config().parsed
const ktcs = new Ktcs()
ktcs.setConfig(Object.assign({debug:true},config))
ktcs.getWxAppToken(config.app).then(console.log)