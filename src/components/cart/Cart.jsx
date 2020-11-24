import React from 'react';
import './Cart.css';
import CartItem from '../cart-item/CartItem';

export default function Cart() {
   return (
      <div className='Cart'>
         <h2 className="Cart__title">Shopping Cart</h2>
         <CartItem />
         <CartItem />
         <CartItem />
         <h3 className="Cart__total">Grand Total: <span>$299.99</span></h3>
      </div>
   );
};
