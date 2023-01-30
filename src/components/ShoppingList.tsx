import React from "react";

function ShoppingList(): JSX.Element {
   const items = [
      {
         id: 1,
         product: "Lemon",
         quantity: 3,
      },
      {
         id: 2,
         product: "Chicken Breast",
         quantity: 2
      }
   ]
  return (
    <div>
      <h1> Shopping List</h1>
      <ul>
        <li> Item 1</li>
      </ul>
    </div>
  );
}

export default ShoppingList;
