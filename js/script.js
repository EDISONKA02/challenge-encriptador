const textoUsuario = document.getElementById("textoUsuario");

const botonEncriptar = document.getElementById("botonEncriptar");
const botonDesencriptar = document.getElementById("botonDesencriptar");
const mensajeFinal = document.getElementById("mensajeFinal");

const contenido_derecha_muñeco = document.getElementById("contenido_derecha_muñeco");
const informacionMensajeFinal = document.getElementById("informacionMensajeFinal");
const botonCopiar = document.getElementById("botonCopiar");

const botonModoOscuro = document.getElementById("modoOscuro");

let remplazar = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];

botonEncriptar.addEventListener("click", () => {
    const texto = textoUsuario.value.toLowerCase();
    const textoEncriptado = encriptarTexto(texto);

    mensajeFinal.value = textoEncriptado;
    contenido_derecha_muñeco.style.display = "none";
    informacionMensajeFinal.style.display = "none";
    botonCopiar.style.display = "block";
    mensajeFinal.classList.add("ajustar");

    textoUsuario.value = "";
});

botonDesencriptar.addEventListener("click", () => {
    const texto = textoUsuario.value.toLowerCase();
    const textoDesencriptado = desencriptarTexto(texto);

    mensajeFinal.value = textoDesencriptado;
    contenido_derecha_muñeco.style.display = "none";
    informacionMensajeFinal.style.display = "none";
    botonCopiar.style.display = "block";
    mensajeFinal.classList.add("ajustar");
});

botonCopiar.addEventListener("click", () => {
    mensajeFinal.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");

});

function encriptarTexto(texto) {
    for (let i = 0; i < remplazar.length; i++) {
        if (texto.includes(remplazar[i][0])) {
            texto = texto.replaceAll(remplazar[i][0], remplazar[i][1]);
        }
    }
    return texto;
}

function desencriptarTexto(texto) {
    for (let i = 0; i < remplazar.length; i++) {
        if (texto.includes(remplazar[i][1])) {
            texto = texto.replaceAll(remplazar[i][1], remplazar[i][0]);
        }
    }
    return texto;
}

botonModoOscuro.addEventListener("click", () => {
    document.body.classList.toggle("modo-oscuro");
    document.getElementById("textoUsuario").classList.toggle("modo-oscuro");
    document.getElementById("contenido_derecha").classList.toggle("modo-oscuro");
    document.querySelectorAll(".botonEncriptar, .botonDesencriptar, .botonCopiar").forEach(boton => {
        boton.classList.toggle("modo-oscuro");
    });
});