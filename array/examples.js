const { MyArray } = require('./Array')

const arr1 = new MyArray()

console.log(arr1.get(0))
arr1.push(8)
console.log(arr1.get(0))
arr1.push('labas')
arr1.push('krabas')
arr1.push('baobabas')
arr1.push(true)
console.log(arr1)

let removed = arr1.pop()
console.log('After removing ', removed, ', we have', arr1)

arr1.delete(1)
console.log('After deleting, we have', arr1)

arr1.delete(0)
console.log('After deleting, we have', arr1)

arr1.unshift('esu')
arr1.unshift('As')
console.log('After unshift, we have', arr1)

removed = arr1.shift()
console.log('After shifting ', removed, ', we have', arr1)
