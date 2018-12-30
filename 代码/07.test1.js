// console.log(module.exports)
// console.log(exports)

// console.log({} === {})

// console.log(module.exports === exports)

/* var a = 10
var b = 20

exports.a = a
module.exports.b = b */


// ----------------一个模块作用域中，向外暴露私有成员时，永远以 module.exports 为准；--------------------

var a = 10
var b = 20

// exports = a
// 注意：为了防止一些不必要的问题，今后在开发中，推荐大家直接使用 module.epxorts 向外暴露成员
module.exports = b