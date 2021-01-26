// restriçao de tipo, vou receber o tipo O e receber o tipo K, no caso K é no maximo uma chave de O
type GetKeyFn = <O, K extends keyof O>(obj: O, key: K) => O[K];

const getKey: GetKeyFn = (ojb, key) => ojb[key];

const animal = {
  raca: 'cachorro',
  bravo: false,
};

console.log(getKey(animal, 'raca'));
