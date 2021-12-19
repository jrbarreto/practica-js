//Helpers:
function esPar(num){
  return (num % 2 === 0);
};

function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });
  const promedioLista = sumaLista / lista.length;
  return promedioLista;
};


//Calculadora de Mediana:
function medianaEloVen(lista){
  const mitad = parseInt(lista.length / 2);

  if(esPar(lista.length)){
    const personaMitad1 = lista[mitad - 1];
    const personaMitad2 = lista[mitad];
    console.log({
      personaMitad1,
      personaMitad2
    })
    const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
    return mediana;
  } else {
    const personaMitad = lista[mitad];
    return personaMitad;    
  };
};


//Mediana General
const eloVen = ven.map(
  function(persona){
    return persona.elo;
  }
);
console.log(eloVen);

const eloVenSorted = eloVen.sort(
  function(eloA, eloB){
    return eloA - eloB;
  }
);
console.log(eloVenSorted);


//MedianaTop10
const spliceEloStart = (eloVenSorted.length * (100 - 10)) / 100;
const spliceEloCount = eloVenSorted.length - spliceEloStart;

const eloVenTop10 = eloVenSorted.splice(spliceEloStart, spliceEloCount);
console.log(eloVenTop10);


//Results
const medianaEloGeneral = medianaEloVen(eloVenSorted);
const medianaEloTop10 = medianaEloVen(eloVenTop10);


console.log({
  medianaEloGeneral,
  medianaEloTop10
});