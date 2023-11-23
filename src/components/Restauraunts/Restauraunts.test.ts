// @ts-ignore
const context= describe
const getRestaurants = () => {

}

describe('레스토랑 리스트를 가져올 API가 필요하다.',  () => {
    context('레스토랑 리스트를 가져온다.', () => {
        it('레스토랑 리스트가 조회된다.',   async () => {
            const response = await fetch('http://localhost:3000/restaurants')
            console.log(response)
        })
    })
});

// describe('test', () => {
//     it('test' , () => {
//         fetch('localhost')
//     })
// })