

function criptografar() {
    
    document.getElementById('imagem').style.display = "none";

    let texto = document.getElementById('conteudo').value;

    if (validar(texto)) {
        let textoCriptografado = "";

        for (let i = 0; i < texto.length; i++) {
            if (texto[i] === 'e') {
                textoCriptografado += "enter";
            } else if (texto[i] === 'i') {
                textoCriptografado += "imes";
            } else if (texto[i] === 'a') {
                textoCriptografado += "ai";
            } else if (texto[i] === 'o') {
                textoCriptografado += "ober";
            } else if (texto[i] === 'u') {
                textoCriptografado += "ufat";
            } else {
                textoCriptografado += texto[i];
            }
        }

        exibirTela(textoCriptografado);
    } else {
        exibirTela('Texto inválido');
    }
}

function descriptografar() {
    let textoCriptografado = document.getElementById('conteudo').value;
   

    if (validar(textoCriptografado)) {
        let textoDescriptografado = "";
        let i = 0;

        while (i < textoCriptografado.length) {
            if (textoCriptografado.substring(i, i + 5) === 'enter') {
                textoDescriptografado += "e";
                i += 5;
            } else if (textoCriptografado.substring(i, i + 4) === 'imes') {
                textoDescriptografado += "i";
                i += 4;
            } else if (textoCriptografado.substring(i, i + 2) === 'ai') {
                textoDescriptografado += "a";
                i += 2;
            } else if (textoCriptografado.substring(i, i + 4) === 'ober') {
                textoDescriptografado += "o";
                i += 4;
            } else if (textoCriptografado.substring(i, i + 4) === 'ufat') {
                textoDescriptografado += "u";
                i += 4;
            } else {
                textoDescriptografado += textoCriptografado[i];
                i++;
            }
        }

        exibirTela(textoDescriptografado);
    } else {
        exibirTela('Texto inválido');
    }
}


function exibirTela(texto) {
    let exibir = document.getElementById('texto__tela');
    exibir.innerText = texto;
}


function validar(texto) {
    let tam = texto.length;
    for (let i = 0; i < texto.length; i++) {
        if (!(texto.charCodeAt(i) >= 97 && texto.charCodeAt(i) <= 122) && texto.charCodeAt(i) !== 32) {
            tam--;
        }
        if (texto.length > tam) {
            return false;
        }
    }
    return true;
}

document.getElementById('botaoCriptografar').addEventListener('click', criptografar);
document.getElementById('botaoDescriptografar').addEventListener('click', descriptografar);
