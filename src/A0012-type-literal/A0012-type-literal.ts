let x = 10; // eslint-disable-line
x = 0b1010;
const y = 10;
const a = 100; // eslint-disable-line

const person = {
  name: 'Igor' as const,
  lastname: 'Matheus',
};

export function chooseTheColor(color: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  return color;
}
console.log(chooseTheColor('Vermelho'), person, x, y);
