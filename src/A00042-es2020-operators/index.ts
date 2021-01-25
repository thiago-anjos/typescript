// encadeamento opcional e operador de coalesncencia nula
type DocumentUser = {
  title: string;
  text: string;
  date?: Date;
};

const document: DocumentUser = {
  title: 'O título',
  text: 'documento ususário',
  // chamando o método
  //date: new Date(),
};

export {};

console.log(document);
// encadeamento opctional é se eu colocar um ? no objeto data... isso é do javascript não do typescript
console.log(document.date?.toDateString());

// coalescencia nula é checar se o valor a esquerda do operador é um não valor, ou seja, null ou undefined ( somente esses )
console.log(document.date?.toDateString() ?? 'não existe dados');
console.log(undefined ?? 'não existe dados');
console.log(null ?? 'não existe dados');
