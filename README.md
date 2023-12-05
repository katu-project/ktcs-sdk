## 卡兔配置服务中心 SDK

## Install 
```bash
npm i ktcs
```

### Usage
```js
const { Ktcs } = require('ktcs')
const ktcs = new Ktcs()
ktcs.setConfig({
    url: CS_DOMAIN,
    token: CS_TOKEN
})
ktcs.getWxAppToken(TOKEN_APP_NAME)
```