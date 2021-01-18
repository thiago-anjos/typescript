/*
A caneta eu posso alterar ela a qualquer momento, porque não vai afetar qq outra classe, mas se eu alterar a ferramenta vai alterar todo mundo que herda ela.
Nesse caso é muito melhor fazer a dependencia de uma classe para um contrato ( Tool ) do que da classe para uma classe concreta ( Pencil e MachineWriter)

Por exemplo se alterar o metodo escrever em uma classe concreta, quebraria o escrito, e isso não acontece quando depende de contratos. ISso se chama inversão de
dependencia.

*/

export class Writer {
  private _tool: Tool | null = null;
  constructor(private _name: string) {}

  get name(): string {
    return this._name;
  }

  set tool(tool: Tool | null) {
    this._tool = tool;
  }

  get tool(): Tool | null {
    return this._tool;
  }

  write(): void {
    if (this.tool === null) {
      console.log('Não posso escrever sem ferramenta');
      return;
    }
    this.tool.write();
  }
}

export abstract class Tool {
  constructor(private _name: string) {}
  abstract write(): void;

  get name(): string {
    return this._name;
  }
}

export class Pencil extends Tool {
  write(): void {
    console.log(`${this.name} está escrevendo...`);
  }
}

export class MachineWriter extends Tool {
  write(): void {
    console.log(`${this.name} está digitando...`);
  }
}

const writer = new Writer('Thiago');
const pencil = new Pencil('Bic');
const writeMachine = new MachineWriter('Maquina de escrever');

console.log(writer.name);
console.log(pencil.name);
console.log(writeMachine.name);

// associar objetos entre as classes
writer.tool = pencil;
writer.tool = null;
writer.write();
