import './Footer.css'
import { useFilters } from '../hooks/useFilters.js'
import { useCart } from '../hooks/useCart.js'

export function Footer () {
    const { filters } = useFilters()
    const { cart } = useCart()

    return (
        <footer className='footer'>
{/* 
            {
                JSON.stringify(filters, null, 2)
            } */}

            <strong>
                Prueba Técnica de React con @midudev
            </strong>
            <br />
{/* 
            {
                JSON.stringify(cart, null, 2)
            }            
             */}
            <small>
                ShoppingCart usando useContext y useReducer
            </small>
        </footer>
    )
}