// uma classe depende da outra, é composta da outra, é acoplada. Exemplo carro e motor

export class Car {
  private readonly motor: Motor = new Motor();

  turnIn(): void {
    this.motor.turnIn();
  }
  turnOut(): void {
    this.motor.turnOut();
  }
  accelerate(): void {
    this.motor.accelerate();
  }
}

export class Motor {
  turnIn(): void {
    console.log('Motor está ligado');
  }
  turnOut(): void {
    console.log('Motor está desligado');
  }
  accelerate(): void {
    console.log('Acelerar...');
  }
}

const car = new Car();
car.turnIn();
