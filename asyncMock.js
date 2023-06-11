const products = [
    {
       id: '1',
       name: 'Raqueta Yonex Ezone',
       price: 90000,
       categoria: 'raquetas',
       img: 'https://www.google.com/search?q=yonex+ezone+100&sxsrf=APwXEdegi0EINcUomibl7zDO1ssVOJIkfw:1684118612954&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj44Lzdpvb-AhUwgpUCHX6CD7oQ_AUoAnoECAEQBA&biw=767&bih=704&dpr=1.25#imgrc=fofeQ2kLYlWqmM', 
       stock: 5,
       description: 'Descripcion de Raqueta Yonex Ezone'
    },
    { id: '2', name: 'Yonex Vcore', price: 85000, categoria: 'Raquetas', img: 'https://www.google.com/search?q=yonex+vcore+100&tbm=isch&ved=2ahUKEwjHtYbfpvb-AhU9CLkGHXO0BiYQ2-cCegQIABAA&oq=yonex+vcore+100&gs_lcp=CgNpbWcQAzIFCAAQgAQyBQgAEIAEMgUIABCABDIGCAAQBxAeMgYIABAHEB4yBggAEAcQHjIGCAAQBxAeMgYIABAHEB4yBAgAEB4yBAgAEB46BAgjECdQoA9Y4CBgzCNoAHAAeACAAYsCiAH1CJIBBTguMi4xmAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=WJxhZMepD72Q5OUP8-iasAI&bih=704&biw=767#imgrc=Y5SWXzZhts90ZM', },
    { id: '3', name: 'Yonex Vcore Pro', price: 99000, categoria: 'Raquetas', img: 'https://www.google.com/search?q=yonex+raquetas+tenis&tbm=isch&hl=es-419&chips=q:yonex+raquetas+tenis,online_chips:casper+ruud:8d_jZ44TnLA%3D,online_chips:yonex+vcore:_PdbFvlqeNw%3D&sa=X&ved=2ahUKEwj2mozqqPb-AhUQuZUCHR-_CfcQ4lYoA3oECAEQLg&biw=767&bih=647#imgrc=87He_aDtdJ_4PM', }

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}