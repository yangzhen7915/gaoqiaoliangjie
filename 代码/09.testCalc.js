// 下面这种方式，是通过路径标识符导入 calc 包的
// const calc = require('./calc')
// 在 导入 包的时候，require 的名字，必须是 包文件夹的名字；而且，只要把包放到 node_modules 目录中，才能直接使用名称来引入这个包
const calc = require('calc1')
// console.log(calc)

console.log(calc.add(1, 2))
console.log(calc.sub(5, 3))