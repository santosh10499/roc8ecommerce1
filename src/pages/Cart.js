
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';


const Cart = () => {
    // const dispatch = useDispatch();
    const products = useSelector((state) => state.cart);
    
    

    return (
        <div>
            <h3>Cart</h3>
            <div className="cartWrapper">
                {products.map((product) => (
                    <div key={product.id} className="cartCard">
                        <img src={product.image} alt="" />
                        <h5>{product.title}</h5>
                        <h5>{product.price}</h5>
                        <div style={{display:'flex', width:'60px',justifyContent:"space-between"}}>
                        <button className="btn">-</button>
                        <button className="btn">+</button>
                        </div>
                        <button style={{width:'100px',background:'green',color:'white',height:'30px'}}>Buy</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;
