import styled from 'styled-components';

import { Stack, Input } from '../../atoms';

import useSearchRestaurants from '../hooks/useSearchRestaurants';

type SearchRestaurantsProps = {
  htmlFor: string;
  placeholder: string;
};

const Wrraper = styled(Stack)`
  align-items: center;
  column-gap: 0.8rem;

  label {
    ${({ theme }) => theme.typography.body_02};
    color: ${({ theme }) => theme.palette.white};
    white-space: nowrap;
  }
`;

export default function SearchRestaurants({
  htmlFor,
  placeholder,
}: SearchRestaurantsProps) {
  const { query, handleSearchQuery } = useSearchRestaurants();

  return (
    <Wrraper $direction='row'>
      <label htmlFor={htmlFor}>검색</label>
      <Input
        type='text'
        id={htmlFor}
        aria-label={htmlFor}
        placeholder={placeholder}
        value={query}
        onChange={handleSearchQuery}
      />
    </Wrraper>
  );
}
