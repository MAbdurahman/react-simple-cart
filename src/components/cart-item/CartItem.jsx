import React from 'react';
import './CartItem.css';

export default function CartItem() {
   return (
      <div className='CartItem'>
         <div className="CartItem__name">Whey Isolate</div>
         <div className="CartItem__price">$29.99</div>
         <div className="CartItem__buttons">
            <button>-</button>
            <span> 1 </span>
            <button>+</button>
         </div>
         <div className="CartItem__total">$29.99</div>
      </div>
   );
};
