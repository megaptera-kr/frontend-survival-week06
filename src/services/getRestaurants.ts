// eslint-disable-next-line import/prefer-default-export, consistent-return
export const getRestaurants = async () => {
  try {
    const response = await fetch('http://localhost:3000/restaurants');
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    throw Error('레스토랑 목록 조회에 실패하였습니다.');
  }
};
