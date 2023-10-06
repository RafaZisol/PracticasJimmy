const desplazamiento = document.getElementById("desplazamiento");
const texto = document.getElementById("texto");
const textodescifrado = document.getElementById("cifrado")
console.log(desplazamiento.value);
//Creamos funcion para cifrar
function cifrado(){
    //Declarar el texto a ingresar
    const textoIngresado = texto.value;
    textodescifrado.value = textoIngresado.split('').map(c=>{
        let mayus = (c===c.toUpperCase()) ? true :
        false;
        let valorEntero = c.toLowerCase().charCodeAt(0);
        if(valorEntero >= 97 && valorEntero <= 122){
            const valorDesplazamiento = parseInt(desplazamiento.value);
            if(valorEntero-valorDesplazamiento < 97){                
                valorEntero=-(122-(valorEntero+122)-valorDesplazamiento)
            }else{
                valorEntero=valorEntero-valorDesplazamiento
            }
        }
        let cifrado = String.fromCharCode(valorEntero);
        return mayus ? cifrado.toUpperCase() : cifrado;
    }).join('');
}
texto.addEventListener("keyup",cifrado);
desplazamiento.addEventListener("change", cifrado);