// tipos básicos ocorre inferencia de tipos, não precisa redeclarar isso no typescript
const nome = 'thiago';
const idade = 30;
const adulto = true;

// array de numeros
const arrayNumber: Array<number> = [1, 2, 3];
// outra forma
const arrayNumber2: number[] = [56, 32];

// array de objetos
const pessoa: { nome: string; idade: number; adulto: boolean } = {
  nome: 'thiago',
  adulto: true,
  idade: 36,
};

console.log(pessoa);

// type annotation function
function sum(x: number, y: number): number {
  return x + y;
}
const result = sum(78, 12);
console.log('sum', result);
// type annotation function arrow
const sum2: (x: number, y: number) => number = (x, y) => x + y;
const result2 = sum2(78, 13);
console.log('sum2', result2);
