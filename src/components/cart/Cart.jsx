import React, { useState, useEffect } from 'react';
import './Cart.css';
import CartItem from '../cart-item/CartItem';

export default function Cart({ initialItems }) {

   const [items, setItems] = useState(initialItems);

   const grandTotal = items
      .reduce((total, item) => total + item.qty * item.price, 0)
      .toFixed(2);

   const updateQuantity = (id, newQuantity) => {
      const newItems = items.map(item => {
         if (item.id === id) {
            return { ...item, qty: newQuantity };
         }
         return item;
      });
      setItems(newItems);
   };

   return (
      <div className='Cart'>
         <h2 className='Cart__title'>Shopping Cart</h2>
         <div className='Cart__items'>
            {items.map(item => (
               <CartItem
                  key={item.id}
                  update={updateQuantity}
                  {...item}
               />
            ))}
         </div>
         <h3 className='Cart__total'>Grand Total: <span>${grandTotal}</span></h3>
      </div>
   );
};
