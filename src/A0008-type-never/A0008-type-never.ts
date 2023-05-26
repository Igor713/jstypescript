export function createError(): never {
  throw new Error('Erro qualquer');
}

createError();

// Module mode
export default 1;
