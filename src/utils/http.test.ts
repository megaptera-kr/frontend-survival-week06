// @ts-ignore
const context = describe


const getRequest = ('get') => {

}

describe('fetch를 이용한다.', () => {
    context('fetch를 호출하면, 성공에 따라 json으로 변환한다.', () => {
        it('json으로 data만 반환된다.', async () => {
            getRequest(method: string  , data : any) {
                const response = await fetch('http://localhost:3000/test', {
                    headers: {
                        Methods : method
                    },
                    data
                })
                if(response.ok){
                    return response.json()
                }
            }

        })
    })
})