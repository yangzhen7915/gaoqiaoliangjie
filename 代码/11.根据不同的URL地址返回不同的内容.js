const http = require('http')

const server = http.createServer()

server.on('request', function (req, res) {
  // 打印客户端请求的 URL 地址
  // console.log(req.url)
  const url = req.url

  // 防止中文乱码
  res.writeHeader(200, {
    'Content-Type': 'text/plain; charset=utf-8'
  })

  if (url === '/' || url === '/index.html') {
    res.end('首页')
  } else if (url === '/movie.html') {
    res.end('电影')
  } else if (url === '/about.html') {
    res.end('关于')
  } else {
    res.end('请求的内容不存在！')
  }
})

server.listen(3000, function () {
  console.log('server running at http://127.0.0.1:3000')
})