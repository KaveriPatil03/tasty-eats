export const addItem = (product) => {
    return{
        type : "ADDITEM",
        payload : product
    }
}

export const delItem = (product) => {
    return {
        type : "DELITEM",
        payload : product
    }
}

export const clearCart = (product) => {
    return {
        type : "CLEARCART",
        payload : product
    }
}