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
