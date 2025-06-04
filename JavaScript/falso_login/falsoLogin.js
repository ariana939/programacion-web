const Usuario  = document.getElementById("Usuario").value;// toma el valor del input
const Pass  = document.getElementById("Pass").value;

let boton = document.getElementById('boton')

boton.addEventListener('click', function(){
    if(Usuario === "ariana" & Pass === "psswrd"){
        localStorage.setItem("user",Usuario);
        localStorage.setItem("pass",Pass);
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error("Error:", error));
    }
    else{
        console.log('no se pudo');
    }
});

//no lo termine 

