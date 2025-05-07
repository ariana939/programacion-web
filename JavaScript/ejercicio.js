//30/04
//Ejercicios de dificultad media 
//IF
const numero = 8
if(numero < 0){
    console.log('negativo')
}
if (numero == 0){
    console.log('Cero')
}
else{
    console.log('Positivo')
}

//FOR
const numeros = [1,2,3,4,5,6,7,8,9,10];
let suma=0;
for(let i=0; i < numeros.length; i++){
    //console.log("posicion", i, "valor", lista[i]) --> me muestra la posicion y el valor de cada indice en la lista de numeros
    if (numeros[i] % 2 === 0){
        suma = suma + numeros[i]
        //suma += lista[i] ---> forma abreviada
    }
}
console.log (`La suma de numeros pares es ${suma}`);

//FOR (version intermedia)
const lista = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]; 
let sumar=0;
for(let i=0; i < lista.length; i++){
    //console.log("posicion", i, "valor", lista[i]) --> me muestra la posicion y el valor de cada indice en la lista de numeros
    if (lista[i] % 3 === 0){
       if (lista[i] % 5 !==0){
        sumar = sumar + lista[i]
       } 
    }
}
console.log (`La suma de multiplos de 3, sin incluir los multiplos de 5 es ${sumar}`);

//-----------------------------------------------------------------------------------------
//07/05

//Ejercicio: Tienda de Productos

//1
const inventario = [];
const prod1 = {nombre: "Auriculares", precio: 1500, categoria: "Electrónica" };
const prod2 = {nombre: "cartera",     precio: 2000, categoria: "Bolsos" };
const prod3 = {nombre: "aritos",      precio: 1000, categoria: "Accesorios" };
const prod4 = {nombre: "zapatillas",  precio: 2500, categoria: "Calzado" };

inventario.push(prod1,prod2,prod3, prod4);
//2
inventario.forEach((item, index, inventarioEntero)=>{
    console.log(
        "index",
        index,
        "elemento", 
        item,//item (los numeros)
        "inventario completo",
        inventarioEntero
    );
});
//3
const electronica = inventario.filter((item)=> item.categoria === "Electrónica");// "item.categoria === "electrinica" quiero decir que cuando el item (categoria,precio,nombre) sea igual a (eletronica,bolsos, accesorios,calzado)
console.log(electronica);

//4
const nombres = inventario.map((item, index)=> {
    const nombre = item.nombre;
    return (nombre);
});
console.log("nombres", nombres);

//Ejercicio: Lista de Peliculas
//1
const peliculas = [];
const peli1 = {titulo: "chucky",     director: "mary luz", año: 2000, genero: "terror" };
const peli2 = {titulo: "cars",       director: "ayelen",   año: 2005, genero: "autos"};
const peli3 = {titulo: "cenicienta", director: "abi",      año: 2010, genero: "infantil"};
peliculas.push(peli1,peli2,peli3);

//2 (no lo termine)
const peliNew = {titulo: "casa", director: "eve", año: 2015, genero: "terror" };
miArreglo.unshift(peliNew);
