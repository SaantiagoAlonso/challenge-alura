let texto ="";
let textoEncriptado = "";
let letra = "";
let textoDesenncriptado = ""
let subtext = "";
let j = 0;
let comprobacion = ["",0]




function encriptar(texto){
    
    
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
    
    for(let i=0; i < texto.length; i++){      

        letra = texto[i];
        // console.log(letra);

        if (letra == "a" || letra == "e" || letra == "i"|| letra == "o" || letra == "u"){
            letra = encriptarVocal(letra);
            textoEncriptado = textoEncriptado + letra;
        }else{
            textoEncriptado = textoEncriptado + letra;
        }

        
       
    } 

   
    console.log(textoEncriptado)
    textoEncriptado="";

   
}

function btn_encriptar(){
    texto = document.getElementsByClassName("texto-entrada")[0].value
    encriptar(texto)
    texto = ""
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
letra = ""

function desencriptar(text){

   

    function verificar(subtext){
       
        switch (subtext){
            case "ai":
                return ["a",1];
            case "enter":
                return ["e",1];
            case "imes":
                return ["i",1];

            case "ober":
                return ["o",1];

            case "ufat":
                return ["u",1];
            default:
                return ["",0]; 
       }
    }

    while(j < text.length){
        

            if(text[j] == 'a' ||text[j] == 'e' || text[j] == 'i'|| text[j] == 'o'|| text[j] == 'u'){
            
                while(comprobacion[1]==0){

                    subtext = subtext + text[j]
                    j = j + 1;
                    comprobacion = verificar(subtext)
                }
                  
                textoDesenncriptado = textoDesenncriptado + comprobacion[0];
                subtext = ""; 
                comprobacion = [0, 0];                  
                    
    
               
                
            }else{
                textoDesenncriptado = textoDesenncriptado + text[j]
                j = j + 1;
                // console.log(textoDesenncriptado)
            }


        }

        console.log('texto desencriptado' + "  "  +  textoDesenncriptado);

    }





// encriptar('loco');


// desencriptar('lobercober');