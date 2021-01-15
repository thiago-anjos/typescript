// & AND interseção entre dois conjuntos

type HasName = { name: string };
type HasMiddleName = { middleName: string };
type HasAge = { age: number };
// esse tipo Pessoa, pode ter nome, pode ter sobrenome ou pode ter idade
type Person = HasName & HasMiddleName & HasAge;

const person: Person = { age: 30, name: 'Thiago', middleName: 'dos anjos' };
console.log(person);

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type Intersection = AB & AC; // intersecion é igual A
const intersection: Intersection = 'A';
console.log(intersection);

export {};
