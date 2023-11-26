export type MenuInterface = {
  id : string;
  name: string;
  price: number;
}

export type RestaurantsInterface = {
  id: string;
  name: string;
  category: string;
  menu: MenuInterface[];
}
