function decoratorMedoto(
  classPrototype: any,
  nomeMetodo: string,
  descriptor: PropertyDescriptor,
): PropertyDescriptor | void {
  console.log(classPrototype);
  console.log(nomeMetodo);
  console.log(descriptor);
  return {
    value: (...args: any[]) => {
      return args[0].toUpperCase();
    },
  };
}

export class UmaPessoa {
  nome: string;
  sobreNome: string;
  idade: number;

  constructor(nome: string, sobreNome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
    this.sobreNome = sobreNome;
  }

  @decoratorMedoto
  metodo(msg: string): string {
    return `${this.nome} ${this.sobreNome}: ${msg}`;
  }

  get nomeCompleto(): string {
    return `${this.nome} ${this.sobreNome}`;
  }

  set nomeCompleto(valor: string) {
    const palavras = valor.split(/\s+/g);
    const primeiroNome = palavras.shift();
    if (!primeiroNome) return;
    this.nome = primeiroNome;
    this.sobreNome = palavras.join(' ');
  }
}

const novaPessoa = new UmaPessoa('thiago', 'dos anjos', 34);
const metodo = novaPessoa.metodo('Matrix reloaded');
console.log(metodo);
novaPessoa.nomeCompleto = 'Rubens da silva';
console.log(novaPessoa);
