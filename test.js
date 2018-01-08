// run tests with:
// nodemon -w ./ -e js -x 'node test.js'

const code = require('./index')

const input = {
  first: [3, 5, 2, 4, 9, 1, 12, 3],
  second: [5, 7, 7, 9, 10, 4, 2],
  third: [1, 1, 3, 2]
}

console.log(code(input))
// sum of all odd od numbers (multiplied) ?

// get this one: 2940
// 38886
