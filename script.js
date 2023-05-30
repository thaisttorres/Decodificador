var textInput = document.querySelector(".texto-criptografar");
var outInput = document.querySelector(".texto-criptografar2")


function btnEncriptar(){
    const textoEncriptado =  encriptar(textInput.value);
    outInput.value = textoEncriptado;
    textInput.value = "";
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"],["i", "imes"], ["a", " ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i=0; i< matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo [i][1]);
        }
    }
    return stringEncriptada;
}


function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textInput.value);
    outInput.value = textoDesencriptado;
    textInput.value = "";
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"],["i", "imes"], ["a", " ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

function btnCopiar(){ 
   let copy = document.querySelector(".texto-criptografar2");
   copy.select();
   navigator.clipboard.writeText(copy.value);
   copy.value = "";
}
