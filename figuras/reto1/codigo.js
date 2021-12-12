// const lado1 = 5;
// const lado2 = 5;
// const base = 3;

// const alturaTrianguloIsosceles = Math.sqrt(Math.pow(lado1, 2) - Math.pow((base / 2), 2));
// console.log("La altura es: " + alturaTrianguloIsosceles);

function alturaTrianguloIsosceles(ladoA, ladoB, ladoBase){
    if(ladoA === ladoB){
        const alturaTriangulo = Math.sqrt(Math.pow(ladoA, 2) - Math.pow((ladoBase / 2), 2));
        return alturaTriangulo;
    } else {
        return "No es un Triángulo Isósceles, boludo.";
    }
}

function calcularAltura(){
    const input1 = document.getElementById("lado1");
    const input2 = document.getElementById("lado2");
    const inputBase = document.getElementById("base");
    const value1 = parseFloat(input1.value);
    const value2 = parseFloat(input2.value);
    const value3 = parseFloat(inputBase.value);
    const altura = alturaTrianguloIsosceles(value1, value2, value3);
    alert(altura);
}
