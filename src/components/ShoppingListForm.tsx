import React, { useRef } from "react";

interface ShoppingListFormProps {
  onAddItem: (item: string) => void;
}


function ShoppingListForm({
  onAddItem
}: ShoppingListFormProps): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);
  // const handleSubmit = (e : React.FormEvent) => {
  //    e.preventDefault()
  //    console.log("Submitted!!!")
  // }
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
   //  console.log(inputRef.current?.value);
   const newProduct = inputRef.current!.value
   onAddItem(newProduct)
   inputRef.current!.value = ""
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Product Name" ref={inputRef} />
        <button type="submit"> Add Product</button>
      </form>
    </div>
  );
}

export default ShoppingListForm
