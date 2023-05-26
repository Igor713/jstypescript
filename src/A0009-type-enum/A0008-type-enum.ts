enum Color {
  RED = 10, // 10
  BLUE = 100, // 100
  YELLOW = 200, // 200
}

enum Color {
  PURPLE = 'PURPLE',
  GREEN = 201,
  PINK,
}

export function chooseTheColor(color: Color): void {
  console.log(Color[color]);
}

chooseTheColor(10);
