const villain = {
  name: 'Galactus',
}

const superHero = {
  name: 'silver surfer',
}

Object.prototype.myCreate = function (parentObject, keysObject) {
  function F() {}
  F.prototype = parentObject
  const newObj = new F()
  Object.defineProperties(newObj, keysObject)
  return newObj
}

const obj = Object.myCreate(superHero, { origin: { value: 'game' } })
console.log(obj)
