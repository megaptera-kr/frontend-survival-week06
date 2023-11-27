import styled, { css } from 'styled-components';
import { Ul, Li, Button } from '../../atoms';

import useClickCategory from '../hooks/useClickCategory';

import categories from '../constans/categories';
import { row } from '../../../styles/utilStyles';

const StyledUl = styled(Ul)(
  () => css`
    ${row};

    column-gap: 1rem;

    li {
      flex: 1;
    }

    li > button {
      width: 100%;
    }
  `,
);

export default function Categories() {
  const { handleClickCategory } = useClickCategory();

  return (
    <StyledUl>
      {categories.map((item) => (
        <Li key={item}>
          <Button
            className='category-button'
            name={item}
            type='button'
            value={item}
            onClick={(e) => {
              handleClickCategory(e);
            }}
          >
            {item}
          </Button>
        </Li>
      ))}
    </StyledUl>
  );
}
