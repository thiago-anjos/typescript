// interface assim como classe vc está modelando o objeto. A interface é 99% parecida com o type alias das classes

interface TypeName {
  name: string;
}

interface TypeMiddleName {
  middleName: string;
}

interface TypeFullBame {
  fullName: () => string;
}

interface TypePersonInterface extends TypeName, TypeMiddleName, TypeFullBame {}

export class Person implements TypePersonInterface {
  constructor(public name: string, public middleName: string) {}
  fullName(): string {
    const fullName = `O nome completo do paciente e ${this.name} ${this.middleName}`;
    console.log(fullName);
    return fullName;
  }
}

export const person2: TypePersonInterface = {
  name: 'thiago',
  middleName: 'dos anjos',
  fullName() {
    return this.name + ' ' + this.middleName;
  },
};

const patient = new Person('Thiago', 'dos anjos');
patient.fullName();
console.log(person2);
