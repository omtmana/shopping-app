import React, {useRef}from "react";

export default function ShoppingListForm(): JSX.Element {

   const inputRef = useRef<HTMLInputElement>(null)
   // const handleSubmit = (e : React.FormEvent) => {
   //    e.preventDefault()
   //    console.log("Submitted!!!")
   // }
   function handleSubmit(e: React.FormEvent) {
      e.preventDefault()
      console.log("Submitted!!!")
   }

   return(
      <div>
         <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Product Name" ref={inputRef}/>
            <button type="submit"> Add Product</button>
         </form>
      </div>
   )
}

// export default ShoppingListForm