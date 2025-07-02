//Capturar Input (useState + onChange)
import { useState} from "react";

function Captura() {

  const [texto, setTexto] = useState("");

  const handleInputChange = (event) => {
    setTexto(event.target.value); 
  };

  return (
  <>
  <input type="text" onChange={handleInputChange} value={texto} />
  {texto && <h2>{texto}</h2>}
  </>
  ); 

}

export default Captura;