export const getRestaurants = async () => {
  try {
    const response = await fetch('http://localhost:3000/restaurants');
    if (response.ok) {
      return await response.json();
    }
  } catch (err) {
    throw Error('레스토랑 목록 조회에 실패하였습니다.');
  }
};
