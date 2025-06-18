import './App.css'
import Pepito from './components/usuario/Usuario'; // export default, renombrado
import {Proveedor} from './components/proveedor/Proveedor'; // export comun
import { useEffect, useState } from 'react';

function App() {
  const [characters, setCharacters] = useState([]);
//         variable, functAct,                valor no inicial

//useEffect va a ejecutar el codigo que se encuentra dentro, tantas veces como se actualicen 
// sus dependencias si no hay dependencias se ejecuta solo antes del primer renderizado
  useEffect(()=>{
    fetch("https://rickandmortyapi.com/api/character")
    .then((data) => data.json()) //.then espera la respuesta
    .then((response) => setCharacters(response.results));
  }, []);

  return (
  <>
  {characters ? (
    characters.map((item, index)=> <p>{item.name}</p>)
  ) : (
    <> cargando...</>
  )}

    hola mundo
    <button>hola soy un boton</button>
    <Pepito/>
    <Proveedor name = {"ariana"}/>
  </>
  );
}

export default App; // es un export no nombrado o default

