// utlizar o this polimorfico, usar o this como tipo

export class Calculator {
  constructor(public numberCal: number) {}

  sum(n: number): this {
    this.numberCal += n;
    return this;
  }
  sub(n: number): this {
    this.numberCal -= n;
    return this;
  }
}

const calc = new Calculator(10);
console.log(calc.sum(2).sub(1));

// mesmo se eu extender essa classe, o this vai continuar funcionando no seu proprio escopo

export class SubCalc extends Calculator {
  mult(n: number): this {
    this.numberCal *= n;
    return this;
  }
}

const calc2 = new SubCalc(100);
console.log(calc2.sum(100).mult(2));

// BUILDER - padrão de projeto GOF
// por que? Bom, as vezes iniciar a classe com um construtor super complexo não vale o trampo, no caso abaixo
// vamos criar uma classe sem o construtor que pode ser desenhada ao poucos

export class RequestBuilder {
  private method: 'GET' | 'POST' | null = null;
  private url: string | null = null;

  setMethod(method: 'GET' | 'POST'): this {
    this.method = method;
    return this;
  }
  setUrl(url: string): this {
    this.url = url;
    return this;
  }
}

const request = new RequestBuilder(); //builder
const requestCreated = request.setMethod('GET').setUrl('/deliveries'); // call and configure methods later of builder
console.log(requestCreated);
