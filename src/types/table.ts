import type { StringKeys, KeyOf } from './common';

export type Column<T extends string> = {key: T; label: string};

export type Columns<T> = Array<Column<StringKeys<KeyOf<T>>>>

export type RenderColumns<T> = (key: KeyOf<T>, data: T) => React.ReactNode;
