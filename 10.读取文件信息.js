const fs = require('fs')

// fs.stat(__dirname + '/files/1.txt', (err, stats) => {
//   if (err) return console.log(err.message)
//   // console.log(stats.size) // 单位是 字节   Byte
//   // console.log(stats.birthtime)  // 2018‎年‎6‎月‎7‎日，‏‎18:19:11    2018-06-07T10:19:11.186Z

//   // console.log(stats.isFile()) // 通过 isFile() 方法判断是否为 文件
//   // console.log(stats.isDirectory()) // isDirectory() 判断是否为目录
// })

fs.stat(__dirname, (err, stats) => {
  if (err) return console.log(err.message)
  // console.log(stats.size)
  // console.log(stats.birthtime)
  // console.log(stats.isFile())
  // console.log(stats.isDirectory())
})