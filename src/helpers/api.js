export const api = {
    gifts: () => new Promise((resolve, reject) => {
        try {
            const list = localStorage.getItem('lista')
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
            localStorage.setItem('lista', JSON.stringify(data))
            resolve('guardado')
        } catch (error) {
            reject('error al guardar')
        }
    })
}