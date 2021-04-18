window.onload = function () {
    $('#ModalJSON').modal();
}
var jsondados = "";
function gerarJSON() {
    try {
        jsondados = JSON.parse(document.getElementById("TextareaJSON").value);
        document.getElementById("TextareaJSON").value = "";
        console.log(jsondados);
    } catch (e) {
        alert("Dado inserido nao pode ser processado");
    }
}