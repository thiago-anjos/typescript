export function isNumber(value: unknown): value is number {
  // quando uma funcao retorna um boolean, lá em cima podemos colocar value is a Number, pra inferir o tipo
  return typeof value === 'number';
}

export function soma<T>(...args: T[]): number {
  const reducer = args.reduce((acc, total) => {
    if (isNumber(acc) && isNumber(total)) {
      return acc + total;
    }
    return acc;
  }, 0);
  return reducer;
}

console.log(soma(1, 2));
console.log(soma('2', '1'));
// vai dar erro abaixo
console.log(soma('1', 1));
// jeito de resolver é fazendo um spread de array
console.log(soma(...['1', 2, 3]));
