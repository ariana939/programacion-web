import { useState } from "react";
import { Pedidos } from "./primer-ejercicio1";




export function Operator() {
const [nums, setNums] = useState([1, 2, 3, 4, 5]);
const [persona, setPersona] = useState({
  name: "Federico",
  alumno: "Thiago",
});




//arrow function
const addNums = () => {
  setNums([...nums, 6]);
};




const updateName = () => {
  setPersona({ ...persona, name: "Miguel", edad: 80 });
  console.log(persona);
};


const productos = [
 { nombre: "Camiseta", precio: 20 },
 { nombre: "Pantalón", precio: 30 },
];


return (
  <>
    {nums.map((num, index) => (
      <p key={index}>{num}</p>
    ))}
    <h3>Spread Operator</h3>
    <button onClick={addNums}>agregar numeros</button>
    <button onClick={updateName}>modificar persona</button>


  </>
);
}
