import React from "react";

function ShoppingListForm(): JSX.Element {

   const handleSubmit = (e : React.FormEvent) => {
      e.preventDefault()
      console.log("Submitted!!!")
   }

   return(
      <div>
         <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Product Name"/>
            <button> Add Product</button>
         </form>
      </div>
   )
}

export default ShoppingListForm