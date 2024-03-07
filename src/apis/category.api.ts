import { singleton } from 'tsyringe';

import Category from '../types/CategoryType';

@singleton()
class CategoryAPI {
  readonly url = 'http://localhost:3000/categories';

  async readAll(): Promise<Category[]> {
    const response = await fetch(this.url);
    if (!response.ok) {
      throw new Error(`Fail to get data. Status: ${response.status}`);
    }

    return response.json();
  }
}

export default CategoryAPI;
