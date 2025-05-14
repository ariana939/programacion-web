//14-05
let text  = document.getElementById("input_id").value
let boton = document.getElementById('boton')

boton.addEventListener('click', function(){
    alert('estas seguro/a que quieres agregar');

    let container = document.getElementById("container");
    let parrafo = document.createElement("p");
    parrafo.textContent = "Este es el parrafo creado";
    container.append(parrafo);

});