// criar um namespace dentro de um arquivo
// no javascript e no typescript já temos um sistema de módulo ES6, import e export ( módulos )
// um módulo é um namespace
// inclusive isso é só um exemplo, utilize o módulo do js mesmo

/* eslint-disable @typescript-eslint/no-namespace */
namespace MeuNameSpace {
  export const nome = 'Eu sou o Chris';
  export class PersonNameSpace {
    constructor(public name: string) {}
  }
  const person = new PersonNameSpace('thiago');
  console.log(person);
}

const personOutside = new MeuNameSpace.PersonNameSpace('Luiz');
console.log(personOutside);
console.log(MeuNameSpace.nome);
