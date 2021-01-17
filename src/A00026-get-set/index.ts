export class Person {
  constructor(
    private name: string,
    private middleName: string,
    private _document: string,
    private _age: number,
  ) {
    // CHAMAR O SETTER AQUI TB
    this.age = _age;
  }

  set document(value: string) {
    console.log('SETTER CHAMADO');
    this._document = value;
  }

  get document(): string {
    console.log('GETTER CHAMADO');
    return this._document.replace(/\D/g, '');
  }

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    this._age = value;
  }
}

const person = new Person('Thiago', 'dos anjos', '342.737.498-07', 34);
person.document = '342.737.498-08';
console.log(person.document);
