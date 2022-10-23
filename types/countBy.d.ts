export function countBy<T>(fn: (a: T) => string | number, list: readonly T[]): { [index: string]: number };
export function countBy<T>(fn: (a: T) => string | number): (list: readonly T[]) => { [index: string]: number };
