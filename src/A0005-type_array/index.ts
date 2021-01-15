function multiply(...args: Array<number>): number {
  // O ,1 é a inicializacao do value no reduce
  console.log(...args);
  return args.reduce((acc, value) => acc * value, 1);
}

function concatString(...args: Array<string>): string {
  return args.reduce((acc, value) => acc + value);
}

console.log(multiply(10, 5, 1));
console.log(concatString('a', 'b', 'c'));
