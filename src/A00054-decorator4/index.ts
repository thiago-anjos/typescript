//decorator nada mais é que é um objeto impostor. Ele finge ser um ojeto, e no meio do caminho ele pode modificar, alterar ou substituir o objeto por completo
// passar argumentos no decorator
@outroDecorador
@inverter('parametro 1', 'parametro 2')
export class Animal {
  constructor(public color: string) {}
}

interface Constructor {
  new (...args: any[]): any;
}

function outroDecorador(target: Constructor) {
  console.log('Sou o outro decorator', target);
  return target;
}

function inverter(param1: string, param2: string) {
  //closure (acesso ao escopo)
  return function (target: Constructor) {
    return class extends target {
      // aqui é o corpo do constructor
      color: string;
      constructor(...args: any[]) {
        super(...args);
        this.color = this.reverse(args[0]);
      }

      reverse(value: string): string {
        return value.split('').reverse().join('') + ' ' + param1 + ' ' + param2;
      }
    };
  };
}

const animal = new Animal('blue');

console.log(animal);
