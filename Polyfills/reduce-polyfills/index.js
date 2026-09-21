const arr = [1, 2, 3, 4, 5, 6, 6, 7]

Array.prototype.myReduce = function (callbackFun, initialValue) {
  if (typeof callbackFun !== 'function') {
    throw new TypeError('callbackFun is not the function type')
  }

  if (this === null) {
    throw new Error('Invalid Data')
  }
  if (!this.length && !initialValue) {
    throw new Error('Reduce of empty array with no Initial value')  // error when we do [].reduce()
  }
  const initValue = initialValue ? initialValue : this[0]
  const startIndex = initialValue ? 0 : 1

  let accumulator = initValue

  for (let i = startIndex; i < this.length; i++) {
    const nextVal = this[i]
    accumulator = callbackFun(accumulator, nextVal, i, this)
  }

  return accumulator
}

const sumOfAll = function (acc, next, i, arr) {
  return acc + next
}

let result = arr.myReduce(sumOfAll, 0)

console.log(result)
