// 1. 导入 fs 文件操作模块
const fs = require('fs')

// 2. 分析需求的处理步骤：
// 2.1 使用 fs.readFile 读取 成绩文本
// 2.2 把读取到的文本，处理成标准的格式
// 2.3 把处理的结果，输入到新的文件中

fs.readFile(__dirname + '/成绩.txt', 'utf8', (err, dataStr) => {
  if (err) return console.log('读取文件失败：' + err.message)
  // console.log(dataStr)
  // 1. 使用字符串的 split 方法分割字符串
  let arr = dataStr.split(' ')
  // console.log(arr)
  // 2. 循环 arr 数组，判断 当前循环的这一项长度是否大于 0 ， 如果大于 0 才有操作的必要
  // arr.forEach(function (item, i) {  })

  // 定义 空数组，用来存储处理完毕之后的每个成绩信息
  let newArr = []
  arr.forEach(item => {
    if (item.length > 0) {
      let newScore = item.replace('=', '：')
      newArr.push(newScore)
    }
  })

  // 当 上面的 forEach 执行完毕，就证明 成绩处理完成了
  // console.log(newArr)

  fs.writeFile(__dirname + '/成绩 - ok.txt', newArr.join('\n'), (err) => {
    if (err) return console.log('写入文件失败：' + err.message)
    console.log('处理成绩成功！')
  })
})