import { createContext, useState } from "react";

// 1- crear el contexto
export const CartContext = createContext()

// 2- crear provider
export function CartProvider({ children }) {
    const [cart, setCart] = useState([])

    const addToCart = product => {}
    const clearCart = () => {
        setCart([])
    }

    return ()
}