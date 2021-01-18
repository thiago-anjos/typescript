// todas as classes que extenderem a classe que é abstrata tenham determinado metodo ou atributo
// com a palavra abstract, essa classe não pode mais ser instanciada diretamente, mas sim extendida
export abstract class Character {
  // criar atributos abstratos, vc tb força cada classe extendida a ter esses atributos
  protected abstract avatar: string;

  constructor(
    protected name: string,
    protected attack: number,
    protected life: number,
  ) {}

  strike(character: Character): void {
    this.power();
    console.log(`${this.name} está atacando...`);
    character.loseLife(this.attack);
  }

  loseLife(strikeForce: number): void {
    this.life -= strikeForce;
    console.log(
      `${this.avatar + this.name} está sendo atacado e agora tem ${
        this.life
      } de vida`,
    );
  }

  // toda classe que extender character é obrigado a ter esse metodo abstrato
  abstract power(): void;
}

export class Warrior extends Character {
  protected avatar = '\u{1F9DD}';
  power(): void {
    console.log(`Kage Bunshin no Jutsu`);
  }
}
export class Monster extends Character {
  protected avatar = '\u{1F42F}';

  power(): void {
    console.log(`Selo dos 9 Kages`);
  }
}

const warrior = new Warrior('Naruto', 100, 1000);
const monstro = new Monster('Madara', 87, 1000);

warrior.strike(monstro);
warrior.strike(monstro);
warrior.strike(monstro);
monstro.strike(warrior);
monstro.strike(warrior);
