function inserir(num) {
    const numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function limpar() {
    document.getElementById('resultado').innerHTML = "";
}

function reduzir() {
    const numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero.substring(0, numero.length - 1);
}

function calcular() {
    const numero = document.getElementById('resultado').innerHTML;
    if (numero) {
        document.getElementById("resultado").innerHTML = eval(numero);
    } else {
        alert("Digite um número");
    }

}