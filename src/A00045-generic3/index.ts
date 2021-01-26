interface PersonContract<T = string, U = number> {
  name: T;
  middleName: T;
  age: U;
}

const person: PersonContract = {
  name: 'Thiago',
  middleName: 'dos anjos',
  age: 37,
};

export {};

console.log(person);
