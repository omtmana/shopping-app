import React, {useState, useEffect} from 'react';
import ShoppingList from './components/ShoppingList';
import Greeter from './components/Greeter';
import ShoppingListForm from './components/ShoppingListForm';
import Item from './models/item'
import {v4 as getId, v4} from "uuid"
import './App.css';


// interface Item {
//   id: number;
//   product: string;
//   quantity: number;
// }

function App() {
   const [items, setItems] = useState<Item[]>([])

   const addItem = (product: string) => {
    console.log("Made to app component")
    console.log(product)
    setItems([...items, {id: getId(), product, quantity: 1 }])
   }
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
      <ShoppingListForm onAddItem={addItem} />
    </div>
  );
}

export default App;
