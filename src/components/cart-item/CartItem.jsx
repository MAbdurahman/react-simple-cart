import React from 'react';
import './CartItem.css';

export default function CartItem({ id, name, price, qty, update }) {

   const incrementQuantity = () => update(id, qty + 1);
   const decrementQuantity = () => update(id, qty - 1);

   return (
      <div className='CartItem'>
         <div className="CartItem__name"><p>{name}</p></div>
         <div className="CartItem__price"><p>${price}</p></div>
         <div className="CartItem__buttons">
            <button onClick={decrementQuantity} disabled={qty <= 0}>-</button>
            <span> {qty} </span>
            <button onClick={incrementQuantity}>+</button>
         </div>
         <div className="CartItem__total"><p>${(qty * price).toFixed(2)}</p></div>
      </div>
   );
};
