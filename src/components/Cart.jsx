import './Cart.css'
import { useId } from "react";
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from "./Icons.jsx";

export function Cart () {
    const cartCheckboxId = useId()
    return (
        <>
            <label className="cart-button" htmlFor={cartCheckboxId}>
                <CartIcon />
            </label>
            <input id={cartCheckboxId} type="checkbox" hidden />
            <aside className="cart">
                <ul>
                    <li>
                        <img
                            src="https://i.dummyjson.com/data/products/1/1.jpg"
                            alt="iPhone"
                        />
                        <div>
                            <strong>Iphone</strong> - $1500
                        </div>

                        <footer>
                            <small>
                                Qty: 1
                            </small>
                            <button>+</button>
                        </footer>
                    </li>
                </ul>

            </aside>
        </>
    )
}