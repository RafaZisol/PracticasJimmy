var viggenere = viggenere || (function(){
    var doStaff = function(txt, desp, action){
        var replace = (function(){
            var abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
            var l = abc.length;
            return function(c){
                var i = abc.indexOf(c.toLowerCase())
                if (i != -1){
                    var pos = i;
                    if(action){
                        //Cifrar
                        pos = (pos + desp) % l;
                    }else{
                        //Descifar
                        pos = (pos - desp + l) % l;
                    }
                    return abc[pos];
                }
                return c;
            }
        })();
        var re = (/([a-z])/ig);
        return String(txt).replace(re,function(match){
            return replace(match);
        })
    }
    return{
        encode:function(txt,desp){
            return doStaff(txt,desp,true);
        },
        decode : function(txt,desp){
            return doStaff(txt,desp,false);
        }
    };
})();

function codificar (texto,clave){
    var resultado="";
    var indiceClave = 0;
    var charATexto = texto.split('');

    for(var i=0; i<charATexto.length; i++){
        var des = obIndiceClave(clave.charAt(indiceClave));
        var charTexto = charATexto[i];

        resultado += viggenere.encode(charTexto, (des>=26)? des%26 : des);
        indiceClave++;

        if (indiceClave>=clave.length){
            indiceClave =0
        }
    }
    document.getElementById("cifrado").value=resultado;
}

function decodificar (texto,clave){
    var resultado="";
    var indiceClave = 0;
    var charATexto = texto.split('');

    for(var i=0; i<charATexto.length; i++){
        var des = obIndiceClave(clave.charAt(indiceClave));
        var charTexto = charATexto[i];

        resultado += viggenere.decode(charTexto, (des>=26)? des%26 : des);
        indiceClave++;

        if (indiceClave>=clave.length){
            indiceClave =0
        }
    }
    document.getElementById("res").value=resultado;
}

function obIndiceClave(reco){
    var abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    return abc.indexOf(reco.toLowerCase());
}

function camposVacios(){
    var texto = document.getElementById("txt").value;
    var clave = document.getElementById("txtClave").value;
    if (texto==""){
        alert=("Ingrese un texto para cifrar")
    }
    if (clave==""){
        alert=("Ingrese una clave para cifrar")
    }
}

function colocar(){
    //copiar el texto
    var copiar = document.getElementById("res").value;
    document.getElementById("txt").value = copiar;
}

function reiniciar(){
    var texto = document.getElementById("txt").value = "";
    var clave = document.getElementById("txtClave").value = "";
    var clave = document.getElementById("res").innerText = "";
}

function cifrado(){
    var checkbox1 = document.getElementById("Cesar");
    var checkbox2 = document.getElementById("Viggenere");
    var desplazamiento = document.getElementById("desplazamiento");
    const texto = document.getElementById("texto");
    const textocifrado = document.getElementById("cifrado")

    if(checkbox1.checked){
        var cifrado = document.getElementById("cifrado").value = "";
        const textoIngresado = texto.value;
        textocifrado.value = textoIngresado.split('').map(c=>{
            let mayus = (c===c.toUpperCase()) ? true :
            false;
            let valorEntero = c.toLowerCase().charCodeAt(0);
            if(valorEntero >= 97 && valorEntero <= 122){
                const valorDesplazamiento = parseInt(desplazamiento.value);
                console.log(desplazamiento.value);
                if(valorEntero+valorDesplazamiento > 122){
                    valorEntero=97+(valorEntero-122)+valorDesplazamiento-1
                }else{
                    valorEntero=valorEntero+valorDesplazamiento
                }
            }
            let cifrado = String.fromCharCode(valorEntero);
            return mayus ? cifrado.toUpperCase() : cifrado;
    }).join('');
    } else if (checkbox2.checked){
        var cifrado = document.getElementById("cifrado").value = "";
        
        var txt = document.getElementById("texto").value;
        var clave = document.getElementById("desplazamiento").value;
        if(clave.length > txt.length){
            alert("La clave no puede ser mas grande que el texto a cifrar");
        }else{
            codificar(txt,clave);
        }
    }
}