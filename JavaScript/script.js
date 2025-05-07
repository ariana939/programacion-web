//30/04
var miVariable = 'contenido de la variable' // no se usa

//let --> solamente vive en el scope declarado o en su hijos
let miVariable2 ='pueden ser re-escritos sus valores'
miVariable2 = 9; //reasignacion del valor

//const --> variable constante no son reasignables los valores 
const miVariable3 = 10;

/*tipos de datos*/
const text ='string' 
const numeros = 2 //number
const booleanos = true //boolean
//undefined -> valor no definido, mas usual
//null -> vacio

//operadores

//aritmeticos: son todos los de matimaticas + - / % *
//comparacion:
// == doble igual compara el valor del dato
// === triple igual compara el valor y el tipo de dato
// != distinto el valor !== distinto valor y tipo
// > < >= <= mayor, menor, mayor o igual, menor o igual

//condiciones
//if

const edad = 20
if(edad > 18){
    console.log('sos mayor de edad')
    //en el print de python
}
else{
    console.log('sos menor de edad')
}


//switch
const dia = 1


switch(dia){
    case 1: console.log('dia lunes'); break //seleciona solo un caso(un dia), si no ponog el break ejecuta todos los casos
    case 2: console.log('dia martes'); break
    default: console.log('Dia no registrado') //default por defecto
}


//funciones
//declaracion de funcion clasica
function saludar (nombre){
    return `Hola ${nombre}`
}
console.log(saludar("Mary"));



//arrow function
//return explicito:
const saludarExplicito = (nombre) => {
    return `Hola ${nombre}`
}
//esta escrita y tiene llaves ... 


//return implicito:
const saludo = (nombre) => `hola ${nombre}`;
//si el return implicito tiene mas de una linea va a estar envuelto en parantesis


//Arreglos o arrays (listas en python)
const miArreglo = [1, 2, "pepito", true]
console.log(miArreglo[2]); //posicion 2 sera pepito 

const miObjeto = {
    clave: 'valor',
    nombre: 'ari',
    edad: 17,
};
console.log(miObjeto.nombre); //trae el nombre (ari)en este caso, si pusiera ".edad" me trae la edad (17)


//iteramos una lista con for 
for(let i=0; i < miArreglo.length; i++){ //"i++" recorre de a uno
    console.log(miArreglo[i]);//imprimi en pantalla el arreglo con su posicion 
}

//-----------------------------------------------------------------------------

//07/05
//Metodos de arreglos 
//length -> longitud del arreglo

const longitud = miArreglo.length;
console.log(longitud);

//push(valor)->Agrega un elemento al final
//equivalen al append de python

miArreglo.push('Nicolas');
console.log("cadena", miArreglo);

//pop() elimina el ultimo elemento de un arreglo
//si queremos lo podemos guardar en una variable
const ultimo = miArreglo.pop();
console.log("ultimo", ultimo);

//shift()elimina el primer valor de un arreglo,
//tambien lo guarda 
const primero = miArreglo.shift();
console.log(primero);

//unshift(valor) Agrega un elemento al principio del arreglo
miArreglo.unshift("luna");
console.log(miArreglo);

//forEach
//SOLO RECORRE ,no guarda los valores en ningun lado 
miArreglo.forEach((item, index, miArregloEntero)=>{
    console.log(
        "index",
        index,
        "elemento", 
        item,//item (los numeros)
        "arreglo completo",
        miArregloEntero
    );
});


//map recorre el arreglo, lo modifica con una funcion y nos devuelve uno nuevo 
const nuevoArreglo = miArreglo.map((item, index)=> {
    const num = 2;
    return (item += num);
});

console.log("nuevo arreglo", nuevoArreglo);


//filter crea un nuevo array a partir de los elementos que cumplan la condicion (lo mismo que el map)
const arregloNum = [2, 4, 5, 6];
const pares = arregloNum.filter((item)=> item % 2 == 0);
console.log(pares);
