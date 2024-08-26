const textoUsuario =document.getElementById("textoUsuario");

const botonEncriptar = document.getElementById("botonEncriptar");

const botonDesencriptar = document.getElementById("botonDesencriptar");

const mensajeFinal = document.getElementById("mensajeFinal");

//La letra "e" - "enter"
//La letra "i" - "imes"
//La letra "a" - "ai"
//La letra "o" - "ober"
//La letra "u" - "ufat"

let remplazar = [
    ["e","enter"],
    ["i","imes"],
    ["a","ai"],
    ["o","ober"],
    ["u","ufat"],
]

botonEncriptar.addEventListener("click", () => {
    const texto = textoUsuario.ariaValueMax.toLowerCase();
    function botonEncriptar(newtext) {
        for(let i = 0; i < remplazar.length; i++) {
            if (newtext.includes(remplazar[i][0])){
                newtext = newtext.replaceAll(remplazar[i][0], remplazar[i][1]);
            }
        }
        return newtext;
    }
    console.log(botonEncriptar(texto));
})