// super class
export class Person {
  constructor(
    public name: string,
    public middleName: string,
    protected document: string,
    private age: number,
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

//sub class
export class Student extends Person {
  // sala é o unico parametro que eu estou criando dentro de aluno, os outros eu só estou repassando
  matricula: string;

  constructor(
    name: string,
    middleName: string,
    document: string,
    age: number,
    public sala: string, // se usar o public antes do nome vc usa um atalho para o this, olhe o exemplo matricula
    matricula: string,
  ) {
    super(name, middleName, document, age); //os atributos que já existem no constructor da classe principal
    this.matricula = matricula; // novo atributo, estou utilizando o this porque não coloquei o atalho public dentro do constructor
  }

  // access super class method
  getFullName(): string {
    console.log('Chamar metodo getfullname da class Person');
    return (
      super.getFullName() +
      ' ' +
      'Olá eu fui modificado mas quero te mostrar sua sala:' +
      this.sala
    );
  }
}
// sub class
export class Client extends Person {
  // sobrescrever novamente o nome
  getFullName(): string {
    return `Nome da empresa: ${this.name} / CNPJ: ${this.document}`;
  }
}

const customPerson = new Person(
  'Raquel',
  'Barros do Nascimento',
  '42.684.376-9',
  31,
);
const student = new Student(
  'Thiago',
  'dos Anjos',
  '42.684.376-9',
  33,
  '34',
  '00000001',
);
const client = new Client(
  'Smartfit',
  'academia de danças',
  '9789798798798/00001',
  34,
);

console.log(customPerson.getFullName());
console.log(student.getFullName());
console.log(client.getFullName());
