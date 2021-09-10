const sum = (a, b) => a - b;
const mul = (a, b) => a * b;

const sumAsync = (...args) => Promise.resolve(sum(...args))
const mulAsync = (...args) => Promise.resolve(mul(...args))

module.exports = {
  sum,
  mul,
  sumAsync,
  mulAsync
}