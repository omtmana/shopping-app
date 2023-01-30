import React from "react";

interface Item {
   id: number;
   product: string;
   quantity: number
}
interface ShoppingListProps {
   items: Item[]
}
function ShoppingList(props: ShoppingListProps): JSX.Element {
  return (
    <div>
      <h1> Shopping List</h1>
      <ul>
        {props.items.map(item => (
         <li key={item.id}>{item.product} - {item.quantity}</li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
