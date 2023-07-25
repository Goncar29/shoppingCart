import { useContext } from "react";
import { CartContext } from "../context/cart";

export const useCart = () => {
    const context = useContext(CartContext);

// con esto vemos si el hook creado esta siendo useado
// en un sitio que no se debe usar, si llega ser undefined

    if (context === undefined) {
        throw new Error("useCart must ve used within a CartProvider")
    }

    return context
}