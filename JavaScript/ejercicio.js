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
