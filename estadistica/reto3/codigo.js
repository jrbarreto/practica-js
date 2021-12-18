//Mi RESULTADO:
// let numeros1 = [7, 5, 8, 4];
// let numeros2 = [9, 3, 2, 1];

// const sumaNumerador = function(num1, num2){
//   let resultado = 0;
//   for(i = 0; i < num1.length; i++){
//     const multi = num1[i] * num2[i];
//     resultado += multi;
//   }
//   console.log(resultado);
//   return resultado;
// };

// const denominador = numeros2.reduce((a,b)=> a + b);
// console.log(denominador);

// const numerador = sumaNumerador(numeros1,numeros2);

// const promedioPonderado = (numerador / denominador).toFixed(4);

// console.log(promedioPonderado);
//FIN de Mi RESULTADO.

//RESULTADO del Curso.
const notes = [
  {
    course: "Educacion Fisica",
    note: 10,
    credit: 2
  },
  {
    course: "Programacion",
    note: 8,
    credit: 5
  },
  {
    course: "Finanzas Personales",
    note: 7,
    credit: 5
  },
];

const notesWithCredit = notes.map(function (noteObject){
  return noteObject.note * noteObject.credit;
});
console.log(notesWithCredit);

const sumOfNotesWithCredit = notesWithCredit.reduce(
  function (sum = 0, newVal) {
    return sum + newVal;
  }
);
console.log(sumOfNotesWithCredit);

const credits = notes.map(function (noteObject){
  return noteObject.credit;
});
console.log(credits);

const sumOfCredits = credits.reduce(
  function(sum = 0,newVal){
    return sum + newVal;
  }
);
console.log(sumOfCredits);

const promedioPonderadoNotasConCreditos = (sumOfNotesWithCredit / sumOfCredits).toFixed(4);

console.log(promedioPonderadoNotasConCreditos);