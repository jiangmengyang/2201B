let express = require('express') //引入express
let Mock = require('mockjs') //引入mock
const loginData = require('./common/login.json')
const menusData = require('./common/menus.json')
let app = express() //实列化 express

/**登录接口 */
app.use('/login', function (req, res) {
  console.log(req, res)
  res.json(
    Mock.mock({
      ...loginData
    })
  )
})

app.use("/menus", function (req, res) {
  console.log(req, res)
  res.json(
    Mock.mock({
      ...menusData
    })
  )
})


app.listen('8090', () => {  //启动服务node
  console.log('监听端口 8090')
})
