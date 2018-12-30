var a = 10

function say() {
  console.log('okokok')
}

// 不推荐使用 global 在模块之间共享成员；
// 存在 全局变量污染的问题；
global.a = 10
global.say = say