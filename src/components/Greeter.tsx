import React from "react";

interface GreeterProps {
   person: string,
}

function Greeter({person}: GreeterProps): JSX.Element {
   return(
      <>
         <h1> Hello! {person} </h1>
      </>
   )
}

// const Greeter: React.FC = () => {
//    return(
//       <h1> HELLO!!!</h1>
//    )
// }

export default Greeter