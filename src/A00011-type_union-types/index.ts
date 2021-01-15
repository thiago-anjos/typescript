// string | number | boolean;

function sumOrConcat(x: string | number, y: string | number) {
  if (typeof x === 'number' && typeof y === 'number') return x + y;
  return `${x} ${y}`;
}

console.log(sumOrConcat(2, 2));
console.log(sumOrConcat(2, '900'));
console.log(sumOrConcat('2', '2'));
