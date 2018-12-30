// console.log(module)
// 默认，在一个模块中，向外暴露成员，需要使用 module.exports
// console.log(module.exports)
// 在模块中，如果要导入其它模块，需要使用 require
// console.log(module.require)
// require('标识符')
// module.require('标识符')


var a = 10
var b = 20
var say = function () {
  console.log('hello')
}

exports.a = a
exports.b = b
exports.say = say