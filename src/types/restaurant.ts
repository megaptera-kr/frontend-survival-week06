import { Category } from './Category';
import { MenuType } from './menu';

export type Restaurant = {
  id:string;
  category:Category;
  name:string;
  menu:MenuType[]
}
