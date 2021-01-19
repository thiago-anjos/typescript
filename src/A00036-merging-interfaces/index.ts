interface Person {
  name: string;
}

interface Person {
  readonly middleName: string;
}

// o declaration mergin ele soma essas duas interfaces com mesmo nome

const person: Person = { name: 'thiago', middleName: 'dos anjos' };

console.log(person.name);

export {};
