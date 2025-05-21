const button = document.getElementById("boton");
let contador = 0;

//*setTimeout
//es una funcion que recibe por parametros dos valores
//recibe una funcion y recibe el tiempo que va a tardar en ejecutarse

//hay dos formas:
//  setTimeout(()=>{}())
//  setTimeout(fuction(){})


button.addEventListener('click', ()=>{
    setTimeout(function(){
      alert("hola fui clickeado hace 2 segundos");
  },2000);//millisecond

  setInterval(()=>{
    contador++;
    console.log(contador);
  },1000);
});

//*setInterval()
//ejecutar el codigo cada n cantidad de tiempo
// setInterval(()=>{
//    contador++
//    console.log(contador);
// }, 1000);



//*asincronia
//peticion a una api
//metodos: get, post, put, delete


//*fetch
//recibe dos argumntos, ahora solo uno
fetch('https://rickandmortyapi.com/api/character')
    .then((data) => data.json())
    .then((response) => console.log("response", response.results[2]));


//*async await
//funcion flecha asincrona
const asyncFunction = async() => {
    //try catch
    try{
      const response = await fetch("https://rickandmortyapi.com/api/character/2")
      const data = await response.json();
      console.log("data", data);
    } catch (error) {
        console.log("error", error);
    }
};
asyncFunction();//para ejecutar una funcion debemos llamarla y poner parentesis y ; al final


//funcion regular asincrona
async function asyncFunc(){

};









//preguntas prueba
//como accedo a la propiedad de un objeto?
// response.results
