import React from 'react';
import './App.css';

import ShoppingList from './components/ShoppingList';
import Greeter from './components/Greeter';

function App() {
     const items = [
       {
         id: 1,
         product: "Lemon",
         quantity: 3,
       },
       {
         id: 2,
         product: "Chicken Breast",
         quantity: 2,
       },
     ];
     
  return (
    <div className="App">
      <ShoppingList items={items}/>
    </div>
  );
}

export default App;
