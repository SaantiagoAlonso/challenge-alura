let texto ="ase";
let textoEncriptado = "";
let letra = "";
let textoDesenncriptado = ""
let subtext = "";
let bandera = 0;

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

/*function desencriptar(text){
    if( text.includes('ai') || text.includes('enter') || text.includes('imes') || text.includes('ober') || text.includes('ufat') ){
        console.log('esta')
        textoDesenncriptado = 
    }else{
        console.log('no esta')
    }
}*/

// encriptar("santiago!")

/*function desencriptar(text){

    let subtext = "";
    let ob = [];
    
    function verificar(subtext){
       
        switch (subtext){
        case "ai":
            return ob = ["a",0];
        case "enter":
            return ob = ["e",0];
        case "imes":
            return ob = ["i",0];

        case "ober":
            return ob = ["o",0];

        case "ufat":
            return ob = ["u",0];
        default:
            return ob = ["",1]; 
       }
    }

    for (let i = 0; i < text.length ; i++){
        
        
        j = i + 1;

        if(text[i] == 'a' ||text[i] == 'e' || text[i] == 'i'|| text[i] == 'o'|| text[i] == 'u'){
            
            subtext = text[i];
            
            while(subtext.length<6){               
                
                subtext = subtext + text[j];              
                ob = verificar(subtext);
                
                if(ob[1] == 0){
                    
                    textoDesenncriptado = textoDesenncriptado + ob[0];
                    subtext = ""
                    break;
                
                }else{
                    j++;
                    textoDesenncriptado = textoDesenncriptado + text[i];
                    subtext = text[i] 
                }
                
            }
        }else{
             textoDesenncriptado = textoDesenncriptado + text[i];
        }

    }
    
    console.log(textoDesenncriptado)
}*/

function desencriptar(text){

   

    function verificar(subtext){
       
        switch (subtext){
            case "ai":
                return "a";
            case "enter":
                return "e";
            case "imes":
                return "i";

            case "ober":
                return "o";

            case "ufat":
                return "u";
            default:
                return 0; 
       }
    }

    while(bandera == 0){
       
        let j = 0;
        
            if(text[j] == 'a' ||text[j] == 'e' || text[j] == 'i'|| text[j] == 'o'|| text[j] == 'u'){
            
                for (j;j<6;j++) {
                    subtext = subtext + text[j];
                    letra = verificar(subtext);
                    if(letra == 0){
                        continue;
                    }else{
                        textoDesenncriptado = textoDesenncriptado + letra
                        break;
                    }
                } 
            }else{
                textoDesenncriptado = textoDesenncriptado + letra
            }

            if(j == text.length){
                bandera = 1;
            }

        }

        console.log(textoDesenncriptado);

    }





encriptar('loc');


desencriptar('loberc');