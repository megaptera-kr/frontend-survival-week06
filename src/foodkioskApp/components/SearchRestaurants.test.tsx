import { screen, fireEvent, waitFor } from '@testing-library/react';

import { container } from 'tsyringe';

import useRender from '../../../tests/utils';

import SearchRestaurants from './SearchRestaurants';

import Menus from './Menus';

import FetchController from './FetchController';

describe('SearchRestaurants Render', () => {
  it('renders label and input', () => {
    useRender(
      <SearchRestaurants
        htmlFor='input-검색'
        placeholder='식당 이름을 입력해 주세요.'
      />,
    );

    expect(screen.getByLabelText(/input-검색/)).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/식당 이름을 입력해 주세요./),
    ).toBeInTheDocument();
  });
});

describe('SearchRestaurants Input Events', () => {
  beforeEach(() => {
    container.clearInstances();
  });

  it('return 메 when an event occurs in the input', () => {
    useRender(
      <SearchRestaurants
        htmlFor='input-검색'
        placeholder='식당 이름을 입력해 주세요.'
      />,
    );

    const input = screen.getByPlaceholderText(
      /식당 이름을 입력해 주세요./,
    ) as HTMLInputElement;

    fireEvent.change(input, { target: { value: '메' } });

    expect(input).toHaveValue('메');
  });
});

describe('SearchRestaurants Input Events', () => {
  beforeEach(() => {
    container.clearInstances();
  });

  it('return 메리김밥은 존재하고 혹동고래카레는 존재하지 않는다. when an event occurs in the input', async () => {
    useRender(
      <>
        <SearchRestaurants
          htmlFor='input-검색'
          placeholder='식당 이름을 입력해 주세요.'
        />
        <Menus />
        <FetchController />
      </>,
    );

    const input = screen.getByPlaceholderText(
      /식당 이름을 입력해 주세요./,
    ) as HTMLInputElement;

    fireEvent.change(input, { target: { value: '메' } });

    await waitFor(() => {
      const text = screen.getByText(/메리김밥/);
      expect(text).toBeInTheDocument();
    });

    await waitFor(() => {
      const text = screen.queryByText(/혹등고래카레/i);
      expect(text).toBeNull();
    });

    fireEvent.change(input, { target: { value: '' } });

    await waitFor(() => {
      const text = screen.getByText(/혹등고래카레/i);
      expect(text).toBeInTheDocument();
    });
  });
});
