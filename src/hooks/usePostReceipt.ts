import Menu from '../types/Menu';

export default function usePostReceipt() {
  const createOrder = async ({ menu, totalPrice }: {
    menu: Menu[],
    totalPrice: number
  }) => {
    const url = 'http://localhost:3000/orders';
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ menu, totalPrice }),
    });

    const receipt = await response.json();
    return receipt;
  };

  return { createOrder };
}
