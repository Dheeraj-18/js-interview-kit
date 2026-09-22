// write polyfill that make array flatten
// Support of configuration depth control

const sampleData = [1, 2, [3, 4, [5, 6, [7, 8, 9, [10]]]]]

// Expected output of depth control i.e only 2 level flatten: [1,2,3,4,5,6[7,8,9,[10]]]

// Way -1  Easy peasy
console.log(sampleData.flat(3))

// Way -2 That was Clever move ask the interviewer that the data is only in numbers okkk

console.log(sampleData.toString().split(',').map(Number))

// Way -3 This is what i am interested in

function flatten(array, level = 100) {
  const result = []

  array.forEach(function (element) {
    if (Array.isArray(element) && level > 0) {
      result.push(...flatten(element, level - 1))
    } else {
      result.push(element) 
    }
  })

  return result
}

console.log(flatten(sampleData , 3))
