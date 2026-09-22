const arr = [1, 4, 5, 3, 6, 7]

// index =  -6 -5 -4 -3 -2 -1

Array.prototype.mySlice = function (start, end) {
//   console.log(this)
  const length = this.length
  // Normalizing the start and end is the only imp key to write the polyfill

  if (start === undefined) {
    // when start argument is not passed
    start = 0
  } else if (start < 0) {
    // when start is negative index
    const newIdx = length + start
    start = Math.max(newIdx, 0) // if negative start is too high negative integer
  } else {
    start = Math.min(start, length) // if start is too large number
  }

  if (end === undefined) {
    end = length
  } else if (end < 0) {
    const newIdx = length + end
    end = Math.max(newIdx, 0)
  } else {
    end = Math.min(end, length)
  }
  const result = []

  for (let i = start; i < end; i++) {
    const value = this[i]
    result.push(value)
  }

  return result
}

console.log(arr.slice(2))
console.log(arr.mySlice(2))
