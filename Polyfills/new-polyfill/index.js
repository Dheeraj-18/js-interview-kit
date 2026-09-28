function Superhero(name) {
  this.name = name
  this.villain = 'Galactus'
}

function myNew(ConstructorFun, ...args) {
  const newObj = {} // Step-1 Create a Object
  Object.setPrototypeOf(newObj, ConstructorFun.prototype) // step -2 override that object [[Prototype]] from Object to the ConstructorFun prototype on which new is called
  const result = ConstructorFun.apply(newObj, args) // step -3 call that ConstructorFun by setting this context to newly crated object and pass argument

  return result instanceof Object ? result : newObj // step-4 return that newly crated object if the ConstructorFun not return any non primitive data i.e object
}

const superhero = new Superhero('silver surfer')
const newSuperhero = myNew(Superhero, 'Iron man')

console.log(superhero)
console.log(newSuperhero)
