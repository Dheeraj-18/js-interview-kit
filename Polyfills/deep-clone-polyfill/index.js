// Write a function which deep clone a object in js

function deepClone(param, seen = new WeakMap()) {
  const result = {}
  if (seen.has(param)) {
    throw new Error('Cyclic Reference')
  }

  Object.keys(param).forEach(function (key) {
    const data = param[key]
    if (typeof data == 'object' && data !== null) {
      result[key] = deepClone(data, seen)
    } else {
      result[key] = data
    }
  })
  seen.set(param, true)
  return result
}

let obj = {
  grandSon: {
    name: 'ram',
  },
}

let copyOfObj = { ...obj }
const clone = structuredClone(obj)

const ourClone = deepClone(obj)
obj.grandSon.money = '1000000000000000'
console.log(copyOfObj)
console.log('structureClone', clone)
console.log('our deep clone', ourClone)
