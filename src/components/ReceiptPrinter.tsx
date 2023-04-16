import Receipt from '../types/Receipt';

interface ReceiptPrinterProps {
    receipt: Receipt | undefined;
}

export default function ReceiptPrinter({ receipt }: ReceiptPrinterProps) {
  return (
    <div style={{ marginTop: 30 }}>
      {
        receipt
          ? (
            <div style={{
              width: 400,
              padding: 30,
              boxSizing: 'border-box',
              border: 1,
              borderColor: 'black',
              borderStyle: 'solid',
              textAlign: 'center',
            }}
            >
              <h2 style={{ margin: 0 }}>영수증</h2>
              <h3>주문번호</h3>
              {receipt.id}
              <h3>주문목록</h3>
              {
                receipt.menu?.map((menuItem) => (
                  <ul
                    key={menuItem.id}
                    style={{
                      listStyle: 'none',
                      padding: 2,
                      margin: 0,
                    }}
                  >
                    <li>
                      <span>{menuItem.name}</span>
                      <span>
                        (
                        {(menuItem.price).toLocaleString('ko-kr')}
                        원)
                      </span>
                    </li>
                  </ul>
                ))
              }
              <div style={{ marginTop: 20, fontWeight: 600 }}>
                💰 총 가격:
                {' '}
                {(receipt.totalPrice)?.toLocaleString('ko-kr')}
                원
              </div>
            </div>
          )
          : (
            <div>[🧾 영수증 나오는 곳]</div>
          )
      }
    </div>
  );
}
