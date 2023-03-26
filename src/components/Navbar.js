import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const items = useSelector((state) => state.cart);
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                height:'60px',
               
            }}
        >
           <div>
            <span className="logo">E-commerce Store</span>
            </div>
            <div>
            
            <input type='search' placeholder='search' style={{width:'200px',height:'25px',borderRadius:'5px'}}/>
            </div>
            <div>
                <Link className="navLink" to="/">
                    Home
                </Link>
                <Link className="navLink" to="/product">
                    Product
                 </Link>
                <Link className="navLink" to="/cart">
                    Cart
                </Link>
                
                <span className="cartCount">Cart items: {items.length}</span>
            </div>
        </div>
    );
};

export default Navbar;
