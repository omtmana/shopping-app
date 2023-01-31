import React, { useRef } from "react";

interface ShoppingListFormProps {
  onAddItem: (item: string, quantity: number) => void;
}


function ShoppingListForm({
  onAddItem
}: ShoppingListFormProps): JSX.Element {

  const productInputRef = useRef<HTMLInputElement>(null);
  const quantityInputRef = useRef<HTMLInputElement>(null)
  // const handleSubmit = (e : React.FormEvent) => {
  //    e.preventDefault()
  //    console.log("Submitted!!!")
  // }
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
   //  console.log(inputRef.current?.value);
   const newProduct = productInputRef.current!.value
   const newQuantity = parseInt(quantityInputRef.current!.value)
   onAddItem(newProduct, newQuantity)
   productInputRef.current!.value = ""
   quantityInputRef.current!.value = "1"
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Product Name" ref={productInputRef} />
        <input type="number" min={0} ref={quantityInputRef}/>
        <button type="submit"> Add Product</button>
      </form>
    </div>
  );
}

export default ShoppingListForm
