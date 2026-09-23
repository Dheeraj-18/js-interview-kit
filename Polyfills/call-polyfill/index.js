const villain = {
  name: 'Galactus',
}

const anotherVillain = {
  name: 'Dr.Doom',
}

window.name = 'Thanos'

function showVillain() {
  console.log(this)
  console.log(this.name)
}

// showVillain()
// showVillain.call(villain)
// showVillain.call(anotherVillain)


// --------------------------------------------------------------------------------------------------------------
// First Attempted

// function myCall(fn, thisArg, ...args) {
//   thisArg.fn = fn
//   const result = thisArg.fn(...args)
//   delete thisArg.fn
//   return result
// }
// myCall(showVillain, window)
// myCall(showVillain, villain)
// myCall(showVillain, anotherVillain)

//------------------------------------------------------------------------------------------------------------------
// Second Attempted
Function.prototype.myCall = function (thisArg, ...args) {
  const self = thisArg || globalThis
  const key = Symbol()
  self[key] = this
  const result = self[key](...args)
  delete self[key]
  return result
}

showVillain.myCall(villain)
showVillain.myCall(anotherVillain)
showVillain.myCall()
showVillain.call()

//-----------------------------------------------------------------------------------------------------------------
// Final Attempt  Easy way by using apply method but interview might be follow up by doing some more

// Function.prototype.myCall = function (thisArg, ...args) {
//   return this.apply(thisArg, args)
// }

// showVillain.myCall(window)
// showVillain.myCall(villain)
// showVillain.myCall(anotherVillain)
