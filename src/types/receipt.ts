import { Menu } from './restaurant';

export type Receipt = {
  id: string;
  menu: Menu[];
  totalPrice: number;
}
