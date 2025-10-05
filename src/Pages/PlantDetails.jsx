import React, { use } from 'react';
import { useLocation } from 'react-router';
import { CartContext } from '../Providers/CartContext';


const PlantDetails = () => {
    const {cart, setCart} = use(CartContext)
    const location = useLocation();
    // console.log(location.state);
    const {category, description, image, name, price} = location.state
    
    return (
        <div className="card p-5 w-1/2 mx-auto bg-gray-100 hover:bg-gray-300  shadow-sm">
      <figure>
        <img className="h-100 w-full object-cover rounded-lg" src={image} alt={name} />
      </figure>
      <div className="card-body text-2xl">
        <div className='flex justify-between'>
            <h2 className="card-title text-2xl">Name: {name}</h2>
            <h2 className="card-title text-2xl">Category: {category}</h2>
        </div>
        <p>Description: {description}</p>
        <p className='font-bold text-3xl'>Price: {price} $</p>
        <div className="card-actions justify-end">
          <button onClick={()=> setCart(pre => [...pre, location.state])}  className="btn btn-primary text-xl">Add To Cart</button>
        </div>
      </div>
    </div>
    );
};

export default PlantDetails;