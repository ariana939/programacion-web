import React, { useState } from "react";


// números
export default function Operator() {
 const [numeros, setNumeros] = useState([1, 2, 3, 4, 5]);


 const setNum = () => {
   setNumeros([...numeros, 6]); // spread operator
 };


 return (
   <>
     <h2>Spread Operator</h2>
     {numeros.map((num, index) => (
       <p key={index}>{num}</p>
     ))}
     <button onClick={setNum}>Agregar número</button>
   </>
 );
}


// productos
export function Pedidos() {
 const productos = [
   { nombre: "Camiseta", precio: 20 },
   { nombre: "Pantalón", precio: 30 },
 ];


 const productosConDescuento = productos.map((producto) => ({
   ...producto,
   descuento: true,
 }));


 return (
   <>
     <h4>productos con descuento</h4>
     {productosConDescuento.map((producto, index) => (
       <p key={index}>{producto.nombre} - {String(producto.descuento)}- {producto.precio} </p>
     ))}
   </>
 );
}




