//criando um type
type myType = number;

const arrayNumbers: Array<number> = [1, 2, 3, 4, 5];
console.log(arrayNumbers);

//promisses são generic
async function promiseAsync() {
  return 1;
}

promiseAsync().then((result) => console.log(result + 1));

//diferente de uma promisse customizada na qual a promisse ela espera um api por exemplo, no caso fixemos um timeout

function myPromise(): Promise<myType> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 2000);
  });
}

myPromise().then((result) => console.log(result + 100));
