export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || []

export const CART_ACTION_TYPES = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    CLEAR_CART: 'CLEAR_CART'
}

// actualizar localStorage con estado para el carrito
export const updateLocalStorage = state => {
    window.localStorage.setItem('cart', JSON.stringify(state))
}

// reducer, transforma el estado mediante la accion y calcula un nuevo estado
export const cartReducer = (state, action) =>{
    // logica de actualizacion del estado
    const { type: actionType, payload: actionPayload } = action

    switch (actionType){
        case CART_ACTION_TYPES.ADD_TO_CART: {
            const { id } = actionPayload
            const productInCarIndex = state.findIndex(item => item.id === id)

            if (productInCarIndex >= 0) {
                //esto hace copias profundas de los arrays
                const newState = structuredClone(state)
                // al cart nuevo le incrementamos la cantidad, ya que no es parte del estado
                newState[productInCarIndex].quantity += 1
                updateLocalStorage(newState)
                return newState
            }
            const newState = [
                ...state,
                {
                    ...actionPayload, //product
                    quantity: 1
                }
            ]
            updateLocalStorage(newState)
            return newState
        }
        case CART_ACTION_TYPES.REMOVE_FROM_CART: {
            const { id } = actionPayload
            const newState = state.filter(item => item.id !== id)
            updateLocalStorage(newState)
            return newState
        }
        case CART_ACTION_TYPES.CLEAR_CART: {
            return []
        }
    }
    return state
}

// testeando que el reducer funciona para añadir un producto al carrito

// expect(
//     reducer([], { type: 'ADD_TO_CART', payload: { id: 1} })
// ).toEqual([{ id: 1, quantity: 1 }])