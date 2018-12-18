let name = 'zs'
let age = 22
function show() {
  console.log('我是zs')
}

// var person = {
//   name: name,
//   age: age,
//   show: show
// }

// console.log(person)

/* var person = {
  name,
  age,
  show,
  say: function () {
    console.log('ok')
  }
} */

var person = {
  name,
  age,
  show,
  say() {
    console.log('ok')
  }
}

console.log(person)