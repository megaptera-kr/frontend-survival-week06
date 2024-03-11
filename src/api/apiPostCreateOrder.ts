import Menu from '../types/Menu';

async function apiPostCreateOrder(menu: Menu[]) {
  // API 호출
  const url = 'http://localhost:3000/orders';

  const totalPrice = menu.reduce((acc, cur) => acc + cur.price, 0);

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ menu, totalPrice }),
  });

  const { receipt } = await res.json();

  return receipt;
}

export default apiPostCreateOrder;
