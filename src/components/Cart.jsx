import './Cart.css'
import { useId } from "react";
import { CartIcon, ClearCartIcon } from "./Icons.jsx";
import { useCart } from '../hooks/useCart.js'

export function Cart () {
    const cartCheckboxId = useId()
    const { cart, clearCart, addToCart } = useCart();

    function CartItem({ thumbnail, price, title, quantity, addToCart }) {
        return (
            <li>
                <img
                    src={thumbnail}
                    alt="iPhone"
                />
                <div>
                    <strong>{title}</strong> - ${price}
                </div>

                <footer>
                    <small>
                        Qty: {quantity}
                    </small>
                    <button onClick={addToCart}>+</button>
                </footer>
            </li>
        )
    }

    return (
        <>
            <label className="cart-button" htmlFor={cartCheckboxId}>
                <CartIcon />
            </label>
            <input id={cartCheckboxId} type="checkbox" hidden />

            <aside className="cart">
                <ul>
                {/* // Agregamos al carrito una cantidad mas */}
                    {cart.map(product => (
                        <CartItem 
                            addToCart={() => addToCart(product)}
                            key={product.id} 
                            {...product}/>
                    ))}
                </ul>
                {/* // limpiamos el carrito */}
                <button onClick={clearCart}>
                    <ClearCartIcon />
                </button>
            </aside>
        </>
    )
}