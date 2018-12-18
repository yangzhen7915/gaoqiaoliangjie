let user = {
  name: 'zs',
  age: 20,
  gender: '男'
}

// 解构赋值的语法
const { name: username, age: userage, gender } = user
username = 'ls'
console.log(username)
console.log(userage)
console.log(gender)




// let name = user.name
// let age = user.age
// console.log(name)
// console.log(age)