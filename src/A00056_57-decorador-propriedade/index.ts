function decorador(
  classPrototype: any,
  nomePropriedade: string | symbol,
): any | void {
  //console.log(classPrototype);
  //console.log(nomePropriedade);
  let valorPropriedade: any;
  return {
    get: () => valorPropriedade,
    set: (valor: any) => {
      if (typeof valor === 'string') {
        valorPropriedade = valor.split('').reverse().join(' ');
        return;
      }
      valorPropriedade = valor;
    },
  };
}

export class UmaPessoa {
  @decorador
  nome: string;
  @decorador
  sobreNome: string;
  @decorador
  idade: number;

  constructor(nome: string, sobreNome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
    this.sobreNome = sobreNome;
  }

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
//novaPessoa.nomeCompleto = 'Rubens da silva';
//console.log(novaPessoa);
