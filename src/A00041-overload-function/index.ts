// baseado na assinatura da função ( parametros ) fazer a funcao se comportar de maneira diferente

type Adder = {
  (x: number): number;
  (y: number): number;
  (...arg: number[]): number;
};

const adder: Adder = (x: number, y?: number, ...args: number[]) => {
  if (args.length > 0)
    return args.reduce((acc, valorAtual) => acc + valorAtual, 0) + x + (y || 0);
  // avaliacao de curto circuito (Y || 0) ou é y ou é 0
  return x + (y || 0);
};

console.log(adder(1));
console.log(adder(1, 2));
console.log(adder(1, 2, 5, 7, 9));
