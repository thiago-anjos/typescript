//In order to prevent functions to be in global scope, you can add export {}; on top (or just export this function):
export {};

// o any ele aceita qualquer coisa, utilizar apenas em ultimo caso
function showMessage(msg: any) {
  return msg;
}

console.log(showMessage('1'));
console.log(showMessage([1, 2, 3, 4]));
console.log(showMessage(1));
