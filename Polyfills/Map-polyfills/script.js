const arr = [1, 2, 3, 4]

// A function which return a array by doing square of each number

// const thisIsThis = { hey: 1 }
// const result = myMap(arr, transformArray, thisIsThis)
// console.log(result)

// function transformArray(elem, index, meraArray) {
//   console.log(this)
//   return elem * elem
// }

// function myMap(dataArray, callbackFn, thisArg) {
//   const finalArray = []

//   for (let i = 0; i < dataArray.length; i++) {
//     const value = dataArray[i]
//     const newValue = callbackFn.call(thisArg, value, i, dataArray)
//     finalArray.push(newValue)
//   }

//   return finalArray
// }

// -----------------------------------------------------------------------------------------------------------------------------

// Array.prototype.myMap = function (callbackFn) {
//   // console.log(this);       // value of this arr

//   if (typeof callbackFn !== 'function') {
//     throw new TypeError('callback function is not a function')
//   }
//   const result = []

//   for (let i = 0; i < this.length; i++) {
//     if (this.hasOwnProperty(i)) {
//       const value = this[i]
//       const newValue = callbackFn(value, i, this)
//       result.push(newValue)
//     }
//   }

//   return result
// }

// function getSquareOfNumber(num) {
//   return num * num
// }

// const result = arr.myMap(getSquareOfNumber)
// console.log(result)

// -----------------------------------------------------------------------------------------------------------------------

Array.prototype.myMap = function (callbackFn) {
  if (typeof callbackFn !== 'function') {
    throw new TypeError('callback function is not a function')
  }
  const result = new Array(this.length)
  let flag = 0
  while (flag < this.length) {
    if (this.hasOwnProperty(flag)) {
      const value = this[flag]
      const newValue = callbackFn(value, flag, this)
      result[flag] = newValue
    }
    flag++
  }

  return result
}

function getSquareOfNumber(num) {
  return num * num
}

const result = arr.myMap(getSquareOfNumber)
console.log(result)

const sample1 = [1, 2, 3, 4]
const sample2 = new Array(10)
const sample3 = [1, , , , 2, , , 3, , , 4]
const sample4 = { length: 2, 0: 10, 1: 20, 3: 30 }

const result1 = sample2.map((d) => d * 2)
const result2 = sample2.myMap((d) => d * 2)
// const result3 = sample3.myMap((d) => d * 2)
// const result4 = Array.prototype.myMap.call(sample4, (d) => d * 2)

console.log({ result1, result2 })
