// 需求：调用 fs.writeFile 方法，向 files 目录中，写入一个 2.txt 文档   222

// 1. 导入 fs 文件操作模块
const fs = require('fs')

// 2. 调用 fs.writeFile 写入文件
// 参数1： 路径字符串，表示要把文件内容，写入到哪个文件中
// 参数2： 要写入的数据，可以给定一个 字符串
// 参数3： 可选参数，表示 要以什么格式写入文件内容  默认以 utf8 格式写入文件【一般默认不传递第三个参数】
// 参数4： 文件写入完成之后的 callback 回调函数
//           在回调函数中，只有一个形参，err 错误对象
fs.writeFile('./files/2.txt', '222', (err) => {
  // 如果文件写入失败，则报错
  if (err) return console.log('写入文件失败！' + err.message)
  console.log('文件写入成功！')
})

// 如果在使用 fs.writeFile 的时候，要写入的文件不存在，则直接写入；如果要写入的文件路径已经存在，则会覆盖之前的文件；