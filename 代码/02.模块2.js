// 注意：这是 程序员使用 require 导入 自己的 JS 模块
// const m1 = require('./01.模块1.js')

// console.log(m1)

// 大家可以认为 global 就是 浏览器中的 window
// console.log(global)

// 默认在 Node 中，每一个 JS 文件中定义的 方法、变量，都是属于 模块作用域的；
var b = 20

// console.log(global.b)
global.b = b

global.say = function () {
  console.log('这是挂载到全局的 say 方法')
}

console.log(global.b)
global.say()