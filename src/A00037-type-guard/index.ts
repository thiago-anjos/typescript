export function sum(x: unknown, y: unknown): number | string {
  // type guard
  if (typeof x === 'number' && typeof y === 'number') return x + y;
  return `${x} + ${y}`;
}

//console.log(sum('2', 8));

type Car = {
  motor: boolean;
  wheels: number;
  door: string;
};

type MotorCicle = {
  motor: boolean;
  wheels: number;
};

type Machines = Car | MotorCicle;

export class MyCar implements Car {
  constructor(
    public motor: boolean,
    public wheels: number,
    public door: string,
  ) {}
}

function useMachines(obj: Machines): void {
  // console.log(obj.door); // a propriedade door nao existe na moto, mas somente no carro, aqui cabe um type guard, segue abaixo
  // Primeira maneira de chegar se um atributo existe dentro de um objeto
  if ('door' in obj) console.log(obj.door);
  // Segunda maneira é chegar se o obj foi instanciado da classe Car que tem a propriedade porta
  if (obj instanceof MyCar) console.log(`Instanciado classe MyCar:${obj.door}`);
}

useMachines(new MyCar(true, 4, '4 portas'));
