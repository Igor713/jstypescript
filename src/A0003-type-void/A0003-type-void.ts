const noReturn = (...args: string[]): void => {
  console.log(args.join(' '));
};

const person = {
  name: 'Igor',
  lastname: 'Matheus',

  showName(): void {
    console.log(this.name + ' ' + this.lastname);
  },
};

noReturn('Igor', 'Matheus');
person.showName();

export { person };
