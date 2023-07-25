import { createContext, useState } from "react";

// 1- crear el contexto
export const CartContext = createContext()

// 2- crear provider
export function CartProvider({ children }) {
    const [cart, setCart] = useState([])

    const addToCart = product => {
        // chequeamos si el producto esta en el carrito
        const productInCarIndex = cart.findIndex(item => item.id === product.id)

        if (productInCarIndex >= 0) {
            //esto hace copias profundas de los arrays
            const newCart = structuredClone(cart)
            // al cart nuevo le incrementamos la cantidad, ya que no es parte del estado
            newCart[productInCarIndex].quantity += 1
            setCart(newCart)
        }
    }

    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            clearCart
        }}
        >
            {children}
        </CartContext.Provider>
    )
}