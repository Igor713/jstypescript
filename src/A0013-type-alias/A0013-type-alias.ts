type Age = number;
type Person = {
  name: string;
  age: Age;
  sallary: number;
  favoriteColor?: string;
};
type ColorRGB = 'Vermelho' | 'Verde' | 'Azul'; // OR
type ColorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type favoriteColor = ColorRGB | ColorCMYK;

const person: Person = {
  age: 24,
  name: 'Igor',
  sallary: 200_000,
};

export function setfavoriteColor(person: Person, color: favoriteColor): Person {
  return { ...person, favoriteColor: color };
}

console.log(setfavoriteColor(person, 'Verde'));
console.log(person);
