const desplazamiento = document.getElementById("desplazamiento");
const texto = document.getElementById("texto");
const textocifrado = document.getElementById("cifrado")
//Creamos funcion para cifrar
function cifrado(){
    //Declarar el texto a ingresar
    const textoIngresado = texto.value;
    textocifrado.value = textoIngresado.split(' ').map(c=>{
        let mayus = (c===c.toUpperCase()) ? true :
        false;
        let valorEntero = c.toLowerCase().charCodeAt(0);
        if(valorEntero >= 97 && valorEntero <= 122){
            const valorDesplazamiento = parseInt(desplazamiento.value)
        }
    })
}