export class Person {
  // atributos estáticos

  static defaultAge = 0;
  static defaultDocument = '000.000.000-00';

  constructor(
    public name: string,
    public middleName: string,
    public _document: string,
    public _age: number,
  ) {}

  //metodo estático é um método que pode ser acessado sem acessar a instancia da classe
  static speakHi(): void {
    console.log('Hello World');
  }

  static createPersonSimple(name: string, middleName: string): Person {
    return new Person(
      name,
      middleName,
      Person.defaultDocument,
      Person.defaultAge,
    );
  }

  //metodo normal
  getDefaultName(): void {
    console.log({ age: Person.defaultAge, document: Person.defaultDocument });
  }
}

const person = new Person('Thiago', 'dos anjos', '342.737.498-07', 34);

console.log(person);

Person.speakHi();

const simplePerson = Person.createPersonSimple('thiago', 'anjos');

console.log(simplePerson);

person.getDefaultName();
