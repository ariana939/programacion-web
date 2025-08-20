import{useState} from 'react'//cada vez que vamos a usar el state debemos poner este reglon
import './App.css'

function App() {
  const [num, setnum] = useState([1,2,3,4]);
  const [persona, setPersona]= useState({nombre:"pepito", edad: "30"})
  //Spread Operator
  function myFunction(){
    //setnum([1,2,3,4])// set num permite cambiar el arreglo de numeros
    setnum([...num, num.length+1]);// "...num" otra forma pero sin escribir los numeros,
    // "num es el nombre de el arreglo", ponemos una "," y agregamos el numero que queremos
  }
  function propiedad(){
    const propiedades = useState({nombre:"ari", edad:"17"})
    setPersona({...persona});
  }
  //tarea:
  //hacer que el setNUm agregue numeros consecutivos .length --> 3 puntos
  //agregar una propiedad al objeto persona usando spread operator--> 4 puntos
  //y que al hacer un click en un boton dispare la funcion y la muestre por consola
  //opcional 3 puntos:
  //partiendo de {nombre :"pepito", edad: 30}, cambia solo nombre a "luis" usando spread
  return (
    <>
      <div>
        {num.map((item, index)=>(
          <><p>{item}</p></>
        ))}
        {persona.map((item, index)=>(
          <><p>{item}</p></>
        ))}
        <button onClick={myFunction}>Agregar numero</button>
        <button onClick={propiedad}>Agregar</button>
      </div>
    </>
  )
}

export default App
