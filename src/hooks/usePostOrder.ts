import useBasketStore from './useBasketStore';

const url = 'http://localhost:3000/orders';

export default function usePostOrder() {
  const [{ basket, totalPrice }] = useBasketStore();

  const postOrder = async () => {
    const body = {
      menu: basket,
      totalPrice,
    };
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    return response.json();
  };

  return {
    postOrder,
  };
}
