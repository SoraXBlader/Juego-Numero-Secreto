//Variables
let numeroSecreto = 0;
let intentos = 0;
let numeroMaximo = 10;
//lista de numeros sorteados
let listaNumerosSorteados = [];

//Insertar titulo y parrafo
function asignatTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
//Generar número secreto
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo){
        asignatTextoElemento('p', "Ya se sortearon todos los números posibles")
    }else{
        // Si el numero generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
//Programar botón Intentar 
function botonIntentar(){
   let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
        //Limitar intentos
        if(intentos == 5){
            asignatTextoElemento('p', "Perdiste todos tus intentos")
        }else{
            //El usuario acerto
            if (numeroDeUsuario === numeroSecreto){
            asignatTextoElemento('p', `Acertaste en ${intentos} ${(intentos == 1) ? "intento." : "intentos."}`);
            //Remover el atributo "disabled" para activar boton "Nuevo Juego"
            document.getElementById("reiniciar").removeAttribute('disabled');
        }else {
            //El Usuario no acerto
            if (numeroDeUsuario > numeroSecreto){
                asignatTextoElemento('p', "El numero secreto es menor");
            }else {
                asignatTextoElemento('p', "El numero secreto es mayor");
            }
        }
        intentos++;
        limpiarCaja();
     }
   return;
}

//Limpiar caja de texto
function limpiarCaja() {
    document.querySelector('#valorUsuario').value =  '';
}

function condicionesIniciales(){
    //Reiniciar los mensajes del juego
    asignatTextoElemento('h1', "Descubre el número secreto");
    asignatTextoElemento('p', `Ingresa un número entre 1 y ${numeroMaximo}`);
     //Generar el numero aleatorio
     numeroSecreto = generarNumeroSecreto();
     //Reiniciar el boton y numero de de intentos
     intentos = 1;
}
//Boton Nuevo Juego
function reiniciarJuego() {
    //Limpiar la caja de texto
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    condicionesIniciales();
    //Deshabilitar el boton de Nuevo Juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true')
    
     
}
condicionesIniciales();

