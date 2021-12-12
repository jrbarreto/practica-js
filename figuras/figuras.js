//Código del cuadrado
console.group("Cuadrado");

//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

//const perimetroCuadrado = ladoCuadrado * 4;
//console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");
function perimetroCuadrado(lado) {
    return lado * 4;
}

//const areaCuadrado = ladoCuadrado * ladoCuadrado;
//console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");
function areaCuadrado(lado){
    return lado * lado;
}

console.groupEnd();


//Código del triángulo
console.group("Triángulo");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTrigangulo = 5.5;
// console.log(
//     "Los lados del triángulo miden: "
//     + ladoTriangulo1 + "cm, "
//     + ladoTriangulo2 + "cm, "
//     + baseTriangulo + "cm"
// );
// console.log("La altura del triángulo es de: " + alturaTrigangulo + "cm");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}
// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}
// const areaTriangulo = (baseTriangulo * alturaTrigangulo) / 2;
// console.log("El area del triángulo es: " + areaTriangulo + "cm^2");

console.groupEnd();


//Código del circulo

console.group("Círculo");

//radio
// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo + "cm");

//diámetro
function diametroCirculo(radio){
    return radio * 2;
}
// const diametroCirculo = radioCirculo * 2;
// console.log("El diametro del circulo es: " + diametroCirculo + "cm");

//PI
const PI = Math.PI;
console.log("Valor de PI: " + PI);

//circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
// const perimetroCirculo = diametroCirculo * PI;
// console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");

//area
function areaCirculo(radio){
    return (radio * radio) * PI;
}
// const areaCirculo = (radioCirculo * radioCirculo) * PI;
// console.log("El area del circulo es: " + areaCirculo + "cm^2");

console.groupEnd();


//Aqui interactuamor con el HTML

//cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

//triangulo
function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("inputTriangulo1");
    const input2 = document.getElementById("inputTriangulo2");
    const inputBase = document.getElementById("inputBaseTriangulo");
    const value1 = parseFloat(input1.value);
    const value2 = parseFloat(input2.value);
    const value3 = parseFloat(inputBase.value);
    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const inputBase = document.getElementById("inputBaseTriangulo");
    const inputAltura = document.getElementById("inputAlturaTriangulo");
    const valueBase = parseFloat(inputBase.value);
    const valueAltura = parseFloat(inputAltura.value);
    const area = areaTriangulo(valueBase, valueAltura);
    alert(area);
}

//circulo
function calcularDiametroCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const diametro =diametroCirculo(value);
    alert(diametro);
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const area = areaCirculo(value);
    alert(area);
}