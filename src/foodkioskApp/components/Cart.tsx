import styled from 'styled-components';

import { Button, Stack, Typography } from '../../atoms';

import useCart from '../hooks/useCart';

type CartProps = {
  title: string;
};

const CartWrraper = styled(Stack)`
  row-gap: 1.6rem;
`;

const MenusWrraper = styled(Stack)`
  background: ${({ theme }) => theme.palette.black};
  row-gap: 1.6rem;
  width: fit-content;
  border: ${({ theme }) => `2px solid ${theme.palette['grey-400']}`};
  border-radius: 8px;
  padding: 0.8rem;
`;

const Item = styled(Stack)`
  column-gap: 1.6rem;
  align-items: center;

  button {
    background: ${({ theme }) => theme.palette.white};
    color: ${({ theme }) => theme.palette.black};
    margin-left: auto;

    &:hover {
      color: ${({ theme }) => theme.palette.white};
      background: ${({ theme }) => theme.palette['green-900']};
    }
  }
`;

export default function Cart({ title }: CartProps) {
  const {
    addedFoods,
    disabled,
    totalPrice,
    deleteFood,
    resetFoods,
    orderMenus,
  } = useCart();

  const totalPriceText = totalPrice?.toLocaleString();

  const addedLength = addedFoods?.length || 0;

  return (
    <CartWrraper $direction='column'>
      <Typography as='h2' $color='white' $variant='heading_02'>
        {title}
      </Typography>

      {addedFoods && addedFoods.length > 0 ? (
        <MenusWrraper $direction='column'>
          {addedFoods.map(({ name, price }, index) => {
            const priceText = price.toLocaleString();
            return (
              <Item $direction='row' key={Math.random()}>
                <Typography as='span' $color='white' $variant='body_03'>
                  {name}({priceText}
                  원)
                </Typography>
                <Button type='button' onClick={() => deleteFood(index)}>
                  취소
                </Button>
              </Item>
            );
          })}

          <Typography $variant='body_03' $color='white'>
            {`주문내역 ${addedLength}개`}
          </Typography>
          <Typography $variant='body_03' $color='white'>
            {`${totalPriceText}원`}
          </Typography>
        </MenusWrraper>
      ) : (
        <Stack $direction='column'>
          <Typography $variant='body_03' $color='white'>
            {`주문내역 ${addedLength}개`}
          </Typography>
        </Stack>
      )}

      {!!addedLength && (
        <Button
          className='cta-order-button'
          type='button'
          onClick={resetFoods}
          disabled={disabled}
          name='전체 취소'
        >
          전체 취소
        </Button>
      )}

      <Button
        className='cta-order-button'
        type='button'
        onClick={() => {
          orderMenus(totalPrice, addedFoods);
        }}
        // disabled={disabled}
        name='주문하기'
      >
        {addedLength ? '주문하기' : '메뉴를 선택해주세요.'}
      </Button>
    </CartWrraper>
  );
}
