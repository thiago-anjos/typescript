//decorator nada mais é que é um objeto impostor. Ele finge ser um ojeto, e no meio do caminho ele pode modificar, alterar ou substituir o objeto por completo
@decorator
export class Animal {
  constructor(public color: string) {}
}

//decorator é uma funcao que vai receber a classe que queremos decorar
function decorator<T extends new (...args: any[]) => any>(target: T): T {
  return class extends target {
    // aqui é o corpo do constructor
    color: string;
    constructor(...args: any[]) {
      super(...args);
      this.color = this.reverse(args[0]);
    }

    reverse(value: string): string {
      return value.split('').reverse().join('');
    }
  };
}

const animal = new Animal('blue');

console.log(animal);
