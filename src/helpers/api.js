export const api = {
    gifts: () => new Promise((resolve, reject) => {
        try {
            const list = localStorage.getItem('giftList')
            setTimeout(
                () => resolve({
                    status: 'ok',
                    data: list ? JSON.parse(list) : []
                }),
                1000
            )
        } catch (error) {
            reject({
                status: 'error',
                data: []
            })
        }
    }),
    save: (data) => new Promise((resolve, reject) => {
        try {
            localStorage.setItem('giftList', JSON.stringify(data))
            resolve('saved')
        } catch (error) {
            reject('error: data cannot be saved')
        }
    })
}