export type Categories = '전체' | '중식' | '한식' | '일식';

export type MenuItem = {
  id: string;
  name: string;
  price: number;
};

export type Receipt = {
  id?: string;
  menu?: MenuItem[];
  totalPrice?: number;
};

export type ReceiptResponse = {
  receipt: Receipt;
};

export type RestaurantItem = {
  id: string;
  category: string;
  name: string;
  menu: MenuItem[];
};

export type RestaurantsItem = {
  restaurants: RestaurantItem[];
};

export type RenderType = 'none' | 'card' | 'notFound';

export interface State {
  restaurants: RestaurantItem[];
  category: Categories;
  query: string;
  receipt: Receipt;
  addedMenus: MenuItem[];
}
