const R = require('ramda')

const isEven = n => n % 2 === 0
const sumOdds = R.pipe(
  R.filter(R.complement(isEven)),
  R.reduce(R.add, 0),
)

// public static void argv and shizzle
const main = R.pipe(
  R.map(sumOdds),
  R.values,
  R.reduce(R.multiply, 1),
)

module.exports = main
