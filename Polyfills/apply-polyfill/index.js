const villain = {
  name: 'Galactus',
}

const anotherVillain = {
  name: 'Dr.Doom',
}

window.name = 'Thanos'

function showVillain() {
  console.log(this.name)
}
// ----------------------------------------------------------------------------------------------
// First Attempt
Function.prototype.myApply = function (thisArg, args = []) {
  const context = thisArg || globalThis
  const key = Symbol()
  context[key] = this
  const result = context[key](...args)
  delete context[key]
  return result
}

showVillain.myApply(villain, [2, 4, 5])
showVillain.myApply(anotherVillain)
showVillain.myApply()

// --------------------------------------------------------------------------------------------------
// Final Attempted
// Function.prototype.myApply = function (thisArg, args = []) {
//   const context = thisArg || globalThis

//   return this.call(context, ...args)
// }
