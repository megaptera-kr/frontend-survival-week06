import { singleton } from 'tsyringe';

import Category from '../types/CategoryType';

@singleton()
class CategoryAPI {
  readonly url: URL;

  constructor() {
    this.url = new URL('http://localhost:3000/categories');
  }

  async read(): Promise<Category[]> {
    const response = await fetch(this.url);
    if (!response.ok) {
      throw new Error(`Fail to get data. Status: ${response.status}`);
    }

    return response.json();
  }
}

export default CategoryAPI;
