// 需求：使用 Node 中 提供的 文件操作API，读取 files 目录下的 1.txt 文档中文本内容
// Node 的三个组成部分：  ECMAScript 核心 + 全局成员 + 核心API成员
// 核心API成员 ，在大家 安装 Node 应用程序的时候，就已经安装到了 自己的 电脑中；
// 如果想要访问 核心成员，直接使用 require('核心成员的名称') 就能够导入并使用这些核心成员；
const fs = require('fs')

// fs 核心模块中，提供了一个  fs.readFile 方法，来读取指定目录下的文件
// fs.readFile()

// fs.readFile 有三个参数：
// 参数1： 表示要读取的文件的路径
// 参数2： 表示 要以什么样的编码格式，来读取指定的文件 默认 编码格式为 null 
// 参数3： 表示 当文件读取完成，调用这个 callback 回调函数来处理读取的结果：
//           第一个 参数，是 Error 对象，第二个参数，才是读取成功的结果
// fs.readFile('./files/1.txt', 'utf-8', function (err, data) {
//   console.log(err) // null    如果 err 为 null 就证明读取成功了，没有出错
//   console.log(data) // <Buffer 31 31 31>
// })


/* fs.readFile('./files/1.txt', 'utf-8', function (err, data) {
  // console.log(err)
  // console.log(data)
  if (err) {
    return console.log('读取文件失败：' + err.message)
  }
  console.log('读取文件成功，内容是' + data)
}) */


fs.readFile('./files/11.txt', 'utf-8', function (err, data) {
  if (err) return console.log('读取文件失败：' + err.message)
  console.log('读取文件成功，内容是' + data)
})