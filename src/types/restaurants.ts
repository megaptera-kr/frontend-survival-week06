export type Menu = {
  id: string;
  name: string;
  price: string;
}

export type Restaurant = {
  id: string;
  name: string;
  category: string;
  menu: Menu[];
}
