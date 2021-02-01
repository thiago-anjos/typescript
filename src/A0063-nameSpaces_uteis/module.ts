import lodash from 'lodash';

//create a function and 'add' to lodash

lodash.mul = function (array: number[]): number {
  return array.reduce((acc, total) => acc * total, 1);
};

type TypePerson = {
  name: string;
};

lodash.bla = () => {
  class Person implements TypePerson {
    constructor(public name: string) {}
    get Name(): string {
      return this.name;
    }
  }

  return Person;
};

global.MYGLOBAL = 'WOW';

export default lodash;
