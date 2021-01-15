// type caching, coerção de tipos, convertendo de um tipo para outro

//htmlbody element ou null
const body = document.querySelector('body');
// se vc passar o mouse em cima do body.style vai quer o o htmlelement existe
if (body) body.style.backgroundColor = 'red';

// nom null assertion, o objeto não pode ser nullo: forbiden no null assertion
const body2 = document.querySelector('body')!;

//type assertion ( SÓ QUANDO TIVER CERTEZA QUE O BODY EXISTE)
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.color = 'blue';
