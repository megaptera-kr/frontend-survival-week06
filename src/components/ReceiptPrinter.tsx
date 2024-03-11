import Food from '../types/FoodType';
import Receipt from '../types/ReceiptType';
import { moneyformat } from '../utils/common';
import MenuItem from './MenuItem';

type ReceiptPrinterProps = {
  receipt: Receipt;
};

export default function ReceiptPrinter({ receipt }: ReceiptPrinterProps) {
  const { id, menu, totalPrice } = receipt;
  const isShowReceipt: boolean = id === undefined || menu?.length === 0;

  return (
    <div
      style={{
        width: '50%',
        border: '1px solid black',
        textAlign: 'center',
      }}
    >
      {isShowReceipt ? (
        <p>[영수증 나오는 곳]</p>
      ) : (
        <>
          <h2>영수증</h2>
          <div>
            <h3>주문번호</h3>
            <p>{id || ''}</p>
          </div>
          <div>
            <h3>주문목록</h3>
            <ul
              style={{
                padding: 0,
                listStyle: 'none',
              }}
            >
              {menu &&
                menu.map((menuItem: Food) => (
                  <MenuItem key={menuItem.id} menuItem={menuItem} />
                ))}
            </ul>
          </div>
          <p>총 가격: {moneyformat(totalPrice)}원</p>
        </>
      )}
    </div>
  );
}
