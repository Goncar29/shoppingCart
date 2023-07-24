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
                            src=""
                            alt=""
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