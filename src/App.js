import React from 'react';
import './App.css';
import Cart from './components/cart/Cart';

const items = [
  {id: 1, name: 'Whey Isolate', price: 29.99, qty: 2},
  {id: 2, name: 'Glucosamine',  price: 18.99, qty: 1},
  {id: 3, name: 'BCAA Energy',  price: 15.99, qty: 2},
  {id: 4, name: 'Smart Water',  price: 12.99, qty: 2},
  {id: 5, name: 'Aqua Fina',    price: 2.99,  qty: 3},
];

function App() {
	return (
		<div className='App'>
			<h1>React-Simple-Cart</h1>
      <Cart initialItems={items} />
		</div>
	);
};

export default App;
