const http = require('http')

const server = http.createServer()

server.on('request', function (req, res) {
  // 打印客户端请求的 URL 地址
  // console.log(req.url)
  const url = req.url

  // 防止中文乱码
  res.writeHeader(200, {
    //  text/plain  和  text/html 的区别： plain 表示普通的文本字符串；  html 表示以 HTMl 标签的形式去解析服务器返回的内容
    // image/jpg     image/gif     image/png
    'Content-Type': 'text/html; charset=utf-8'
  })

  if (url === '/' || url === '/index.html') {
    res.end('<h3>首页</h3>')
  } else if (url === '/movie.html') {
    res.end('<h3>电影</h3>')
  } else if (url === '/about.html') {
    res.end('<h3>关于</h3>')
  } else {
    res.end('<h3>请求的内容不存在！</h3>')
  }
})

server.listen(3000, function () {
  console.log('server running at http://127.0.0.1:3000')
})