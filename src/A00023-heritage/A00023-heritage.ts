export class Person {
  constructor(
    public name: string,
    public middleName: string,
    protected document: string,
    private age: number,
    humanBeing: boolean,
  ) {}

  getAge(): number {
    console.log(this.age);
    return this.age;
  }

  getDocument(): string {
    return this.document;
  }

  getFullName(): string {
    return this.name + ' ' + this.middleName;
  }
}

export class Student extends Person {
  // sobrescrever o metodo da classe pai e fazendo o estudante se comportar de maneira diferente ( polimorfismo )
  getFullName(): string {
    return `O nome do aluno completo é ${this.name} ${this.middleName} e ele tem ${this.getAge}`;
  }
}
export class Client extends Person {
  // sobrescrever novamente o nome
  getFullName(): string {
    return `Nome da empresa: ${this.name} / CNPJ: ${this.document}`;
  }
}

const student = new Student('Thiago', 'dos Anjos', '42.684.376-9', 34, true);
const client = new Client(
  'Smartfit',
  'academia de danças',
  '9789798798798/00001',
  34,
  false,
);

console.log(student.getFullName());
console.log(client.getFullName());
