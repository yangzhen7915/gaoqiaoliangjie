const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer()

server.on('request', function (req, res) {
  let url = req.url

  // TODO: 判断请求的URL地址，返回对应的HTML页面内容
  if (url === '/') url = '/views/index.html'
  fs.readFile(path.join(__dirname, url), (err, buf) => {
    if (err) return res.end('404. Not found.')
    res.end(buf)
  })
})

server.listen(3000, () => {
  console.log('server running at http://127.0.0.1:3000')
})