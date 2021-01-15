// tipo any me permite qualquer coisa
let x: any = 0;
x = 100;
x = 'thiago';
x = 200;
const y = 800;
// ele deixa somar, ele faz a concatenação
console.log(x + y);

// diferente se eu colocar o tipo unknow
let a: unknown = 'thiago';
a = 100;
const b = 700;
//console.log(a + b); // ojb is of type unknow
if (typeof a === 'number') console.log(a + b);
