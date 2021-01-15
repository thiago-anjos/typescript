// inferido automaticamente
const objA = {
  keyA: 'chave A',
  keyB: 'Chave B',
};

// uma vez que o tipo foi inferido, no caso acima de string, eu não consigo mudá-lo qdo tento reatribuir um novo tipo
objA.keyB = true;
// criar um novo valor tb nao é possivel
objA.keyC = 'teste';

// criar um objeto que possa receber outras chaves
const objB: {
  keyA: string;
  keyB: string;
  keyC?: string;
  [key: string]: unknown;
} = { keyA: 'chave A', keyB: 'chave B' };

objB.keyC = 'tomar banho';
objB.teste = [1, 2, 3, 4];

console.log(objB);
