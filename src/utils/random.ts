export const random = (start: number, end: number): number => {
  return Math.random() * (end - start + 1) + start;
};
