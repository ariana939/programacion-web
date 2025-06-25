import { useState, useEffect } from "react";

export function RickMorty (){
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
      </>
    );
}


