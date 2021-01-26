//generic intersection
export function unirObjetos<T, U>(obj1: T, obj2: U): T & U {
  //return { ...obj1, ...obj2 };
  return Object.assign({}, obj1, obj2);
}

const obj1 = { nome: 'thiago' };
const obj2 = { idade: 34 };
const unir = unirObjetos(obj1, obj2);
console.log(unir);
