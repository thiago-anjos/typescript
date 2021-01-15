//nunca vai retornar nada
// funcoes que lançam erros
function createError(): void {
  throw new Error('Erro qualquer');
}

createError();
