export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const generateArrayWith = <T>(
  length: number,
  mapFn: (index: number) => T
): T[] => {
  return Array.from({ length }, (_, index) => mapFn(index));
};
