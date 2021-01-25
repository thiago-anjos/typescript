const array = [1, 2, 3, 4, 5];
const filter = array.filter((item) => item < 5);
console.log(filter);

//generic type é usado para tipar coisas que não sabemos que vamos receber, exemplo, se virá um array de numero ou de string ou os dois em um parametro de funcao

type FilterCallbanFn<U> = (value: U, index?: number, array?: U[]) => boolean;

function customFilter<T>(array: T[], callback: FilterCallbanFn<T>): T[] {
  const newArray = [];
  for (let i = 0, tot = array.length; i < tot; i++) {
    if (callback(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

const myCustomFilter = customFilter(array, (item) => item > 3);
console.log(myCustomFilter);
