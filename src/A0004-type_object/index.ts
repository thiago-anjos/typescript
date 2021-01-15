// void não retorna nada
function noReturn(...args: string[]): void {
  console.log(args.join(' '));
}

noReturn('Thiago', 'Anjos');

const person = {
  name: 'thiago',
  age: 34,
  showPerson(): void {
    return console.log(`${this.name} tem ${this.age} anos`);
  },
};

person.showPerson();
