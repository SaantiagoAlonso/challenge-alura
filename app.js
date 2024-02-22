let texto ="";
let textoEncriptado = "";
let letra = "";
let textoDesenncriptado = ""
let subtext = "";
let j = 0;
let comprobacion = ["",0]
let contenedor_salida = document.getElementsByClassName("texto-salida");
let contenedor_imagen = document.getElementsByClassName("contenedor-img");
let salida = document.getElementsByClassName("salida-texto")[0];




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
    salida.value = textoEncriptado;
    textoEncriptado="";
    letra = "";
    

   
}

function btn_encriptar(){
    texto = document.getElementsByClassName("texto-entrada")[0].value
    encriptar(texto)
    texto = ""
    contenedor_imagen[0].style.display = "none"
    contenedor_salida[0].style.display = "block" 


}

function btn_desencriptar(){
    texto = document.getElementsByClassName("texto-entrada")[0].value
    textoDesenncriptado = "";
    subtext="";
    j = 0;
    comprobacion = ["",0];
    desencriptar(texto)
    texto = ""
   
    
}



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
        salida.value = textoDesenncriptado;
    
        // textoDesenncriptado = "";

    }





// encriptar('loco');


// desencriptar('lobercober');