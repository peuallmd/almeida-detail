const fotos = [
    "img/moto1.png",
    "img/moto2.png",
    "img/moto3.png",
    "img/moto4.png"
];

const indicadores = document.querySelector(".indicadores");

function atualizarindicadores() {
    indicadores.innerHTML = "";

    fotos.forEach((foto, indice) => {

        const bolinha = document.createElement("span");

        if (indice === fotoatual) {
            bolinha.classList.add("ativo");
        }

        indicadores.appendChild(bolinha)
    });
}

let fotoatual = 0

function mostrarfoto() {
    document.getElementById("foto-carrosel").src = fotos[fotoatual];

        atualizarindicadores();

}

function proximafoto() {
    fotoatual++;

    if (fotoatual >= fotos.length) {
        fotoatual = 0
    }

    mostrarfoto();

}

function fotoanterior() {
    fotoatual--;

    if (fotoatual < 0) {
        fotoatual = fotos.length - 1;
    }

    mostrarfoto();

}

setInterval(proximafoto, 4000)