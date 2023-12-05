const path = require('path')
const fs = require('fs')
const mod = require('module')
const pkg = require('./package.json')

const jsContent = fs.readFileSync(path.join(__dirname,'./index.js')).toString('utf-8')
const reqReg = /require\([\'\"](.*)[\'\"]\)/g
const deps = [...jsContent.matchAll(reqReg)].map(e=>e[1]).filter(e=>!mod.isBuiltin(e))
const noInstall = deps.filter(e=> !Object.keys(pkg.dependencies).includes(e))
noInstall.length ? console.log('检测到未添加的依赖项:', noInstall) : console.log('ok')