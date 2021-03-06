// Cuadrados

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}

// Triangulos

function perimetroTriangulos(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2; 
}

// Circulos

function diametroCirculo(radio) {
    return radio * 2;
}

function perimetroCirculo(radio) {
   const diametro = diametroCirculo(radio);
   return Math.PI * diametro;
}

function areaCirculo(radio) {
    return Math.PI * (radio ** 2);
}

// HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}