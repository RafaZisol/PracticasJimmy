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
                        pos += desp;
                        pos = (pos>=1)?pos-1 : pos;
                    }else{
                        //Descifar
                        pos -= desp;
                        pos = (pos<0)?l+pos : pos;
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

function longitudCifrar(){
    camposVacios();
    var texto = document.getElementById("txt").value;
    var clave = docuemnt.getElementById("txtClave").value;
    if(clave.length > texto.length){
        alert("La clave no puede ser mas grande que el texto a cifrar");
    }else{
        codificar(texto,clave);
    }
}

function longitudDescifrar(){
    camposVacios();
    var texto = document.getElementById("txt").value;
    var clave = docuemnt.getElementById("txtClave").value;
    if(clave.length > texto.length){
        alert("La clave no puede ser mas grande que el texto a cifrar");
    }else{
        decodificar(texto,clave);
    }
}

function codificar (texto,clave){
    var resultado="";
    var indiceClave = 0;
    var charATexto = texto.split('');

    for(var i=0; i<charATexto.length; i++){
        var des = obIndiceClave(Clave.charAt(indiceClave));
        var charTexto = charATexto[i];

        resultado += viggenere.encode(charTexto, (des>=26)? des%26 : des);
        indiceClave++;

        if (indiceClave>=clave.length){
            indiceClave =0
        }
    }
    document.getElementById("res").value=resultado;
}

function decodificar (texto,clave){
    var resultado="";
    var indiceClave = 0;
    var charATexto = texto.split('');

    for(var i=0; i<charATexto.length; i++){
        var des = obIndiceClave(Clave.charAt(indiceClave));
        var charTexto = charATexto[i];

        resultado += viggenere.encode(charTexto, (des>=26)? des%26 : des);
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
    var clave = docuemnt.getElementById("txtClave").value;
    if (texto==""){
        alert="Ingrese un texto para cifrar"
    }
    if (clave==""){
        alert="Ingrese una clave para cifrar"
    }
}