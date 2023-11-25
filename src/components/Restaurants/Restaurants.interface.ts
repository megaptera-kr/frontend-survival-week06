export type Menu = {
  id : string;
  name: string;
  price: number;
}

export type Restaurants = {
  id: string;
  name: string;
  category: string;
  menu: Menu[];
}
