const villain = {
  name: 'Galactus',
}

const anotherVillain = {
  name: 'Dr. Doom',
}

window.name = 'Thanos'

function showVillain(n1, n2, n3) {
  console.log(this.name)
}

//----------------------------------------------------------------------------------------------------------------------------------------
// First Attempted
// Function.prototype.myBind = function (thisArgs, ...args) {
//   const context = thisArgs || globalThis
//   const self = this
//   //   console.log(this);    refer to showVillain fn
//   return function (...bindArgs) {
//     //    console.log(this); refer to window object
//     self.call(context, ...args, ...bindArgs)
//   }
// }

// const fn = showVillain.myBind(villain)
// fn()

//-----------------------------------------------------------------------------------------------------------------------------------------
// Final attempted
Function.prototype.myBind = function (thisArgs, ...args) {
  const context = thisArgs || globalThis
  const self = this

  return function (...bindArgs) {
    const key = Symbol()
    context[key] = self
    const result = context[key](...args, ...bindArgs)
    delete context[key]
    return result
  }
}

const fn = showVillain.myBind(villain)
fn()
