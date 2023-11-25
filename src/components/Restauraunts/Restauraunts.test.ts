import restaurants from "../../features/restaurants";'../../features/restaurants'

// @ts-ignore
const context= describe

const getRestaurants = async () => {
    try {
        const response = await fetch('http://localhost:3000/restaurants')
        if(response.ok){
            return await response.json()
        }
    } catch (err) {
        throw Error('레스토랑 목록 조회에 실패하였습니다.')
    }
}

const getCategories = () => {
    return restaurants.reduce((acc, cur) => acc.category === cur.category ? [...cur.category] : cur , [])
}
describe('레스토랑 리스트를 가져올 API가 필요하다.',  () => {
    context('레스토랑 리스트를 가져온다.', () => {
        it('레스토랑 리스트가 조회된다.',   async () => {
            const { restaurants } = await getRestaurants()
            expect(restaurants.length > 0).toBeTruthy()
        })
    })
});

describe('매장의 분류가 필요하다.', () => {
    context('레스토랑 리스트에서 분류만 추출한다.' , () => {
        it('분류로 구성된 배열이 추출된다.', () => {
            const categories = getCategories()
            console.log(categories)
            expect(categories.length === 3).toBeTruthy()
        })
    })
})