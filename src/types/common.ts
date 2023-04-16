export type KeyOf<T> = keyof T;

export type StringKeys<T> = Extract<T, string>
