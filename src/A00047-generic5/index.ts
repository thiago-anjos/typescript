// estrutura de dados: pilha
export class Person<T, U> {
  constructor(public name: T, public age: U) {}
}

const person1 = new Person('thiago', 34);
console.log(person1);

// estrutura de dados STACK = pilha
export class Pilha<T> {
  private contador = 0;
  private elementos: { [k: number]: T } = {};

  push(elemento: T): void {
    this.elementos[this.contador] = elemento;
    this.contador++;
  }

  isEmpty(): boolean {
    return this.contador === 0;
  }

  pop(): T | void {
    if (this.isEmpty()) return undefined;
    this.contador--;
    const elemento = this.elementos[this.contador];
    delete this.elementos[this.contador];
    return elemento;
  }

  showStack(): void {
    for (const chave in this.elementos) {
      console.log(this.elementos[chave]);
    }
  }
}

const stack = new Pilha();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.showStack();
stack.pop();
stack.showStack();

while (!stack.isEmpty()) {
  console.log('removendo', stack.pop());
}
console.log('//////', stack.showStack());
