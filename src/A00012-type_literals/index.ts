// const é um tipo literal

let x = 10; // eslint-disable-line
x = 0b1010;
//x = 'Thiago';

let y: 10 = 10; // eslint-disable-line
const y2 = 10;

const person = {
  name: 'thiago',
  age: 30 as const,
};

//person.age = 34;

function chooseColor(color: 'Red' | 'Green' | 'Pink'): string {
  return color;
}

console.log(chooseColor('Pink'));

//module mode usa um export, só para sair do escopo global
export {};
