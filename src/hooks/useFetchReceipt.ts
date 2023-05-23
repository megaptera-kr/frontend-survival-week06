export default function useFetchReceipt() {
  const OrderedReceipt = async (id:string) => {
    const url = `http://localhost:3000/orders/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };
  return {
    OrderedReceipt,
  };
}
