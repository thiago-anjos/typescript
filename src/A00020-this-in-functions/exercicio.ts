//import './form-control';

export function teste(this: Date, argment1: string, age: number): void {
  console.log(this);
  console.log(argment1, age);
}

teste.call(new Date(), 'thiago', 34);
teste.apply(new Date(), ['thiago', 34]);
