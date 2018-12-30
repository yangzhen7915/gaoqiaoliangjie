// 导入 HTTP 核心模块
const http = require('http')
// 导入 模板引擎
const template = require('art-template')
const path = require('path')

const server = http.createServer()

server.on('request', function (req, res) {
  const url = req.url

  if (url === '/') {
    // 基于模板名渲染模板
    // template(filename, data)
    // 其中，第一个参数，是要渲染的HTML页面的路径； 第二个参数 是要渲染的 数据；
    // template 方法的返回值，就是 渲染好的HTML内容，可以直接通过 res.end 发送给客户端
    // 如果在渲染页面的时候，没有需要渲染的数据，则第二个参数，可以指定为一个 { } 空对象
    const htmlStr = template(path.join(__dirname, '/views/1.html'), { name: 'zs', age: 22, hobby: ['吃饭', '唱歌', '跳舞'] })
    res.end(htmlStr)
  }
})

server.listen(3000, function () {
  console.log('server running at http://127.0.0.1:3000')
})