//type TypePerson é uma interface, como se fosse uma classe abstrata, no tipo, só define tipo.

type Document = {
  document: string;
};

type TypePerson = {
  name: string;
  middleName: string;
  age: number;
  fullName(): string; // uma forma de declara metodo
  fullData: () => number;
};

// para usar um type, tem que usar o implements ao invés do extends
export class Person implements TypePerson, Document {
  constructor(
    public name: string,
    public middleName: string,
    public age: number,
    public document: string,
  ) {}

  fullData(): number {
    const nowadays = new Date();
    const birthyear = nowadays.getFullYear() - this.age;
    return birthyear;
  }

  public fullName(): string {
    return this.name + ' ' + this.middleName;
  }
}

const person = new Person('thiago', 'dos anjos', 34, '342.737.498-07');
console.log(person);
console.log(person.fullData());
