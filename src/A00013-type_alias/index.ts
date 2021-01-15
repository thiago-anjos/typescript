// utilizar a palavra type, types criado por nós são sempre com letras maíusculas

type Age = number;
type ColorRGB = 'Red' | 'Green' | 'Blue';
type ColorCmyk = 'Cyan' | 'Magenta' | 'Yellow' | 'Black';
type FavoriteColor = ColorRGB | ColorCmyk;
// type Person é um tipo de objeto e não o valor do objeto
type Person = {
  name: string;
  age: Age;
  payment: number;
  favoriteColor?: string;
};

const person: Person = {
  name: 'Thiago',
  age: 45,
  payment: 10000,
};

const setFavoriteColorToPerson = (
  person: Person,
  color: FavoriteColor,
): Person => {
  return { ...person, favoriteColor: color };
};

const personExample = setFavoriteColorToPerson(person, 'Magenta');
console.log(personExample);

export {};
