// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos=[];

function agregarAmigo(){

    let nombreDeAmigo = document.getElementById("nombreAmigo").value; // 
    if (nombreDeAmigo.trim() !== "") { // Evita agregar nombres vacíos
        amigos.push(nombreDeAmigo);
        actualizarAmigos(); //llamamos a la funcion para ver los nuevos amigos
        limpiarCelda();
    } else {
        alert("Por favor, ingresa un nombre válido.");
    }
}


function limpiarCelda(){
    document.getElementById("nombreAmigo").value="";
}


function actualizarAmigos(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML=""; //limpiamos las lista para evitar duplicado

    //recorremos las lista de amigos
    for(let index = 0; index < amigos.length; index++){
        let nuevoElemento = document.createElement("li");
        nuevoElemento.textContent=amigos[index];
        lista.appendChild(nuevoElemento);
    }
}


function sortearAmigo(){
    
    if(!amigos.length){ //compara si la lista esta vacia
        alert("no tienes amigos en la lista");
        return;
    }
        let secreto = Math.floor(Math.random()*amigos.length);
        let lista=document.getElementById("resultado");
        let nuevoElemento=document.createElement("li");//creo un nueva celda
        nuevoElemento.textContent=`Tu amigo secreto es : ${amigos[secreto]}`;//agrego contenido a la celda
        lista.appendChild(nuevoElemento);//agrego la celda a  la lista
        document.getElementById("botonSortear").setAttribute("disabled","true");
        document.getElementById("botonAgregarAmigo").setAttribute("disabled","true");
}
    