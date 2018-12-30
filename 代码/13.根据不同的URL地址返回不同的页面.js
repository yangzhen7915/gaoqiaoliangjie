const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer()

server.on('request', function (req, res) {
  const url = req.url

  // TODO: 判断请求的URL地址，返回对应的HTML页面内容
  if (url === '/' || url === '/index.html') {
    // 返回首页页面
    // 1. 使用 fs 模块，读取 首页文件
    // 2. 把读取到的首页，通过 res.end 返回即可
    fs.readFile(path.join(__dirname, './views/index.html'), 'utf-8', (err, dataStr) => {
      if (err) return res.end('404. Not found.')
      res.end(dataStr)
    })
  } else if (url === '/movie.html') {
    // 返回电影页面
    fs.readFile(path.join(__dirname, './views/movie.html'), 'utf-8', (err, dataStr) => {
      if (err) return res.end('404. Not found.')
      res.end(dataStr)
    })
  } else if (url === '/about.html') {
    // 返回关于页面
    fs.readFile(path.join(__dirname, './views/about.html'), 'utf-8', (err, dataStr) => {
      if (err) return res.end('404. Not found.')
      res.end(dataStr)
    })
  }
})

server.listen(3000, () => {
  console.log('server running at http://127.0.0.1:3000')
})