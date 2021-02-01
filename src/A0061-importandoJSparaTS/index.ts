import { sum } from './module';

//type caching as number
const resolve = sum(10, 20) as number;
console.log(resolve);
