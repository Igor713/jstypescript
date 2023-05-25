/* eslint-disable */

// Tipos básicos (aqui ocorre inferência de tipos)
let name: string = 'Igor'; // Qualquer tipo de strings: '' "" ``
let age: number = 0b1010; // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
let adult: boolean = true; // true ou false
let symbolType: symbol = Symbol('any-symbol'); // symbol
// let big: bigint = 10n; // bigint

// Arrays
let arrNumber: Array<number> = [1, 2, 3];
let arrNumber2: number[] = [1, 2, 3];
let arrString: Array<string> = ['a', 'b'];
let arrString2: string[] = ['a', 'b'];

// Objetos
let person: { name: string, age: number, adult?: boolean } = {
  age: 30,
  name: 'Igor'
};

// Funções
function sum(x: number, y: number): number {
  return x + y;
}
const sum2: (x: number, y: number) => number = (x, y) => x + y;

// Module mode
export default 1;

