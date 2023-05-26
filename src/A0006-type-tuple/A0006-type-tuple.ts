// Tuple
const costumerData1: readonly [number, string] = [1, 'Igor'];
const costumerData2: [number, string, string] = [1, 'Igor', 'Matheus'];
const costumerData3: [number, string, string?] = [1, 'Igor'];
const costumerData4: [number, string, ...string[]] = [1, 'Igor', 'Matheus'];

console.log(costumerData1);
console.log(costumerData2);
console.log(costumerData3);
console.log(costumerData4);

// readonly array
const arr1: readonly string[] = ['Igor', 'Matheus'];
const arr2: ReadonlyArray<string> = ['Igor', 'Matheus'];

console.log(arr1);
console.log(arr2);

// Module mode
export default 1;
