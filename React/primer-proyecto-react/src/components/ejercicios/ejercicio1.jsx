//Contador con Botón (useState + onClick)

import { useState} from "react";


function Contador () {
    const [contador, setContador] = useState(2);
   
    const sumar = () => setContador(contador + 1);
    const restar = () => setContador(contador - 1);

    return (
        <>
        <p>Contador: {contador}</p>
        <button onClick={restar}>resta</button>   
        <button onClick={sumar}>suma</button>
        </>   
        
  );

}

export default Contador;




