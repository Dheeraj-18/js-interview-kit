let arr = [1, 2, 3, 4, 5]

// const obj = {name:"magic"}

// const newArray = filterFunction(arr, transformedFunction,obj)
// console.log(newArray);

// function transformedFunction(value, index, arr) {
//     // console.log(this);   // point to obj object
//   return value % 2 === 0
// }

// function filterFunction(dataArray, callback, thisArg) {
//   const result = []
//   for (let i = 0; i < dataArray.length; i++) {
//     const value = dataArray[i]
//     const needToAdd = callback.call(thisArg,value, i, dataArray)
//     needToAdd && result.push(value)
//   }

//   return result
// }

// ---------------------------------------------------------------------------------------------------------------------------------------------

// Array.prototype.myFilter = function (callbackFun, thisArg) {
//   if (typeof callbackFun !== 'function') {
//     throw new TypeError('callbackFun is not the function')
//   }
//   const newResult = []

//   for (let i = 0; i < this.length; i++) {
//     if (this.hasOwnProperty(i)) {
//       const value = this[i]
//       const needToAdd = callbackFun.call(thisArg, value, i, this)
//       needToAdd && newResult.push(value)
//     }
//   }

//   return newResult
// }

// function transformedFunction(element, index, arr) {
//   return element % 2 === 0
// }

// const res = arr.myFilter(transformedFunction)
// console.log(res)

// ------------------------------------------------------------------------------------------------------

Array.prototype.myFilter = function (callbackFun, thisArg) {
  if (typeof callbackFun !== 'function') {
    throw new TypeError('callbackFun is not the function')
  }
  const newResult = [] // Here we need the Array should be zero length unlike map bcz in filtered array we only add the true condition value

  let flag = 0

  let resultIndex = 0
  while (flag < this.length) {
    if (this.hasOwnProperty(flag)) {
      const value = this[flag]
      const needToAdd = callbackFun.call(thisArg, value, flag, this)
      if (needToAdd) {
        newResult[resultIndex] = value
        resultIndex++
      }
    }
    flag++
  }

  return newResult
}

function transformedFunction(element, index, arr) {
  return element % 2 === 0
}

const res = arr.myFilter(transformedFunction)
console.log(res)
