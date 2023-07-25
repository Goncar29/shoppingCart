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

const UPDATE_STATE_BY_ACTION = {
    [CART_ACTION_TYPES.ADD_TO_CART]: (state, action) => {
        const { id } = action.payload
        const productInCartIndex = state.findIndex(item => item.id === id)

        if (productInCartIndex >= 0) {
            // 👀 una forma sería usando structuredClone
            //esto hace copias profundas de los arrays
            const newState = structuredClone(state)
            // al cart nuevo le incrementamos la cantidad, ya que no es parte del estado
            newState[productInCartIndex].quantity += 1

      // 👶 usando el map
      // const newState = state.map(item => {
      //   if (item.id === id) {
      //     return {
      //       ...item,
      //       quantity: item.quantity + 1
      //     }
      //   }

      //   return item
      // })

      // ⚡ usando el spread operator y slice
        // const newState = [
        //     ...state.slice(0, productInCartIndex),
        //     { ...state[productInCartIndex], quantity: state[productInCartIndex].quantity + 1 },
        //     ...state.slice(productInCartIndex + 1)
        // ]


            updateLocalStorage(newState)
            return newState
        }
        const newState = [
            ...state,
            {
                ...action.payload, //product
                quantity: 1
            }
        ]
        updateLocalStorage(newState)
        return newState
    },
    [CART_ACTION_TYPES.REMOVE_FROM_CART]: (state, action) => {
        const { id } = action.payload
        const newState = state.filter(item => item.id !== id)
        updateLocalStorage(newState)
        return newState
    },
    [CART_ACTION_TYPES.CLEAR_CART]: () => {
        updateLocalStorage([])
        return []
    }
}
// reducer, transforma el estado mediante la accion y calcula un nuevo estado
export const cartReducer = (state, action) =>{
    // logica de actualizacion del estado
    const { type: actionType } = action

    const updateState = UPDATE_STATE_BY_ACTION[actionType]

    return updateState ? updateState(state, action) : state
}

// testeando que el reducer funciona para añadir un producto al carrito

// expect(
//     reducer([], { type: 'ADD_TO_CART', payload: { id: 1} })
// ).toEqual([{ id: 1, quantity: 1 }])