const path = require('path')

// console.log(path.sep) // 路径分隔符

const str = 'c:/a/b/c/1.txt'

console.log(path.basename(str)) // 获取文件名称的
console.log(path.dirname(str)) // 获取文件所在的路径的
console.log(path.extname(str)) // 获取文件的扩展名