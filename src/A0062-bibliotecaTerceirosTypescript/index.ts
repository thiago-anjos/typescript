// ao utilizar uma biblioteca de terceiro, temos que instalar a biblioteca e depois instalar como dependencia seus types
// npm i validator
// npm i @types/validator -D ou --save-dev

import validator from 'validator';
import lodash from 'lodash';
//npm i --save-dev @types/lodash
console.log(validator.isEmail('luiz@gmail.com'));

console.log(lodash.clone([10, 23, 30]));
