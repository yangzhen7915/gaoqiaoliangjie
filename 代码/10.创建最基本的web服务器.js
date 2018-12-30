// 1. 导入 http 核心模块
const http = require('http')

// 2. 调用 http.createServer 方法，创建一个web 服务器对象
// 通过 第二步 创建的 server 服务器，并不能监听任何 客户端的请求；同时 它也没有被启动
const server = http.createServer()

// 3. 为 server 服务器 绑定 监听函数，通过 on 方法，绑定 request 事件，来监听 客户端的请求
server.on('request', function (req, res) {
  // 可以通过 request 事件，来监听并处理客户端的请求；
  // req 表示 客户端 相关的参数
  // res 表示 和 服务器相关的参数 和 方法
  // res.end('hello world.')

  res.writeHeader(200, {
    'Content-Type': 'text/plain; charset=utf-8'
  })

  res.end('你好，世界。')
})

// 4. server.listen 来启动服务器
server.listen(3000, '127.0.0.1', function () {
  console.log('server running at http://127.0.0.1:3000')
})