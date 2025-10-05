import React, { use } from 'react';
import { CartContext } from '../Providers/CartContext';

const Cart = () => {
    const {cart, setCart} = use(CartContext)
    console.log(cart);
    
    return (
        <div>
            <h1>cart</h1>
            {
                cart.map(plant => <p>{plant.name}</p>)
            }
        </div>
    );
};

export default Cart;