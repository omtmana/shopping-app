import React, {useState, useEffect} from 'react';
import './App.css';

import ShoppingList from './components/ShoppingList';
import Greeter from './components/Greeter';
import Item from './models/item'

// interface Item {
//   id: number;
//   product: string;
//   quantity: number;
// }

function App() {
   const [items, setItems] = useState<Item[]>([])

    //  const items = [
    //    {
    //      id: 1,
    //      product: "Lemon",
    //      quantity: 3,
    //    },
    //    {
    //      id: 2,
    //      product: "Chicken Breast",
    //      quantity: 2,
    //    },
    //  ];

  return (
    <div className="App">
      <ShoppingList items={items}/>
    </div>
  );
}

export default App;
