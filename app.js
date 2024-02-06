let texto ="ase";
let textoEncriptado = "";
let letra = "";

function encriptar(text){
    
    
    function encriptarVocal(letra){
        switch (letra) {
            case "a":
                return "ai";
            case "e":
                return "enter";
            case "i":
                return "imes";

            case "o":
                return "ober";

            case "u":
                return "ufat";
            default:
                return letra; // Si no es una vocal, devuelve la misma letra
        }

    }
    
    for(let i=0; i < text.length; i++){      

        letra = text[i];
        console.log(letra);

        if (letra == "a" || letra == "e" || letra == "i"|| letra == "o" || letra == "u"){
            letra = encriptarVocal(letra);
            textoEncriptado = textoEncriptado + letra;
        }else{
            textoEncriptado = textoEncriptado + letra;
        }

        
       
    } 

   
    console.log(textoEncriptado)

   
}

function desencriptar(text){
    
}

encriptar("santiago!")
