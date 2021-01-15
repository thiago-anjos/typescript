let x;
if (typeof x === 'undefined') x = 20;
console.log(x * 2);

function createPerson(
  name: string,
  lastName?: string,
): {
  name: string;
  lastName?: string;
} {
  return { name, lastName };
}

const person = createPerson('Thiago', 'dos Anjos');
console.log(person);

export function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}

const square = squareOf(2);
const square2 = squareOf('2');
console.log(square);
console.log(square2);
export {};
