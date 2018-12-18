const path = require('path')
const fs = require('fs')

// const result = path.join('c:/', 'a', './b', '/c', './d/e', 'f', '../g')
// //                        c:\a\b\c\d\e\g
// console.log(result)


// fs.readFile(__dirname + './files/1.txt', 'utf8', (err, dataStr) => {
//   if (err) return console.log(err.message)
//   console.log(dataStr)
// })

// 最佳实践：以后只要设计到路径拼接，一定要使用 path.join() 方法
fs.readFile(path.join(__dirname, './files/1.txt'), 'utf8', (err, dataStr) => {
  if (err) return console.log(err.message)
  console.log(dataStr)
})