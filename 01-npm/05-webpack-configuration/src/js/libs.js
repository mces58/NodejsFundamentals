// private field
const pi = Math.PI;

// public field
export const sum = (...numbers) => {
  return numbers.reduce((acc, number) => acc + number, 0);
};

export const mult = (...numbers) => {
  return numbers.reduce((acc, number) => acc * number, 1);
};
