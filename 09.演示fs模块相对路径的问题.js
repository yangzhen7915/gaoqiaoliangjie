const fs = require('fs')

// 演示，调用 fs 中方法的时候，如果提供的是相对路径，容易出现问题
// fs.readFile('./files/1.txt', 'utf-8', (err, data) => {
//   if (err) return console.log('读取文件失败：' + err.message)
//   console.log(data)
// })

// PS C:\Users\liulongbin\Desktop\node-day1>
// 读取文件失败：ENOENT: no such file or directory, open 'C:\Users\liulongbin\Desktop\node-day1\files\1.txt'

// PS C:\Users\liulongbin\Desktop>
// 读取文件失败：ENOENT: no such file or directory, open 'C:\Users\liulongbin\Desktop\files\1.txt'

// PS C:\Users\liulongbin>
// 读取文件失败：ENOENT: no such file or directory, open 'C:\Users\liulongbin\files\1.txt'


// 注意：在node中 __dirname 表示当前这个文件，所处的磁盘目录
// console.log(__dirname)
// console.log(__dirname + '/files/1.txt')


// 结论：今后，只要在使用 fs 模块操作文件的时候，而且这个 方法需要提供一个文件的操作路径，这时候，大家一定要使用 __dirname 去拼接路径；
// fs.readFile(__dirname + '/files/1.txt', 'utf8', (err, data) => {
//   if (err) return console.log(err.message)
//   console.log(data)
// })

// __dirname 表示 当前这个文件执行的时候，所处的 根目录，只是代表一层目录而已；
console.log(__dirname)
// __filename 表示 当前这个 文件的 完整路径，路径中包含了具体的文件名
console.log(__filename)