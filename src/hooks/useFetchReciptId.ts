import Food from '../type/Food';

type getReceiptProps = {
  menu : Food[],
  totalPrice : number
}

export default function useFetchReceiptId() {
  const url = 'http://localhost:3000/orders';
  const getReceipt = async ({ menu, totalPrice }:getReceiptProps) => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ totalPrice, menu }),
    });
    const data = await response.json();
    return data;
  };
  return {
    getReceipt,
  };
}
