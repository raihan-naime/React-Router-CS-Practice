import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import { CartContext } from '../Providers/CartContext';

const RootLayout = () => {
    const [cart, setCart] = useState([])
    return (
        <CartContext value={{cart, setCart}}>
            <Navbar/>
            <main className='min-h-[calc(100vh-290px)]'>
                <Outlet/>
            </main>
            <Footer/>
        </CartContext>
    );
};

export default RootLayout;