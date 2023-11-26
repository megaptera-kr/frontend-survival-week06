import styled from 'styled-components';

import { Stack, Typography } from '../../atoms';

import useOrder from '../hooks/useOrder';

const OrderWrraer = styled(Stack)`
  width: 100%;
  border: ${({ theme }) => `2px solid ${theme.palette['grey-400']}`};
  row-gap: 0.8rem;
  border-radius: 8px;
  text-align: center;
  margin: 0 auto;
  padding: 1.2rem;
  background: ${({ theme }) => theme.palette.white};
`;

const OrderIdWrraper = styled(Stack)`
  row-gap: 0.8rem;
`;

const OrderListWrraper = styled(Stack)`
  row-gap: 0.8rem;
`;

const ImportantTypo = styled(Typography)`
  text-decoration: underline;
`;

export default function Order() {
  const { order, isExistOrder } = useOrder();

  const { id, menu, totalPrice } = order;

  return (
    <Stack $direction='column' id='receipt-wrraper'>
      {isExistOrder ? (
        <OrderWrraer $direction='column' id='receipt'>
          <ImportantTypo as='h2' $variant='heading_02' $color='black'>
            영수증
          </ImportantTypo>

          <OrderIdWrraper $direction='column' id='receipt-id'>
            <ImportantTypo as='h3' $variant='heading_01' $color='black'>
              주문번호
            </ImportantTypo>
            <Typography as='p' $variant='body_02' $color='black'>
              {id}
            </Typography>
          </OrderIdWrraper>

          <OrderListWrraper $direction='column' id='receipt-menus'>
            <ImportantTypo as='h3' $variant='heading_01' $color='black'>
              주문목록
            </ImportantTypo>
            {menu?.map(({ name, price }) => (
              <Typography
                as='p'
                $variant='body_02'
                $color='black'
                key={Math.random()}
              >
                {`${name}(${price.toLocaleString()}원)`}
              </Typography>
            ))}
          </OrderListWrraper>

          <ImportantTypo as='h3' $variant='heading_01' $color='black'>
            {`총 가격: ${totalPrice?.toLocaleString()}원`}
          </ImportantTypo>
        </OrderWrraer>
      ) : (
        <Typography as='h2' $variant='heading_01' $color='white'>
          [영수증 나오는 곳]
        </Typography>
      )}
    </Stack>
  );
}
