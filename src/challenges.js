// Desafio 1
const girafa = true;
const elefante = true;
const macaco = false;

function compareTrue(valor1,valor2) {
  let resultado;
  if(valor1 === true && valor2 === true){
    resultado = true;
  }else if(valor1 === true && valor2 === false){
    resultado = false;
  }else if(valor1 === false && valor2 === true){
    resultado = false;
  }else if(valor1 === false && valor2 === false){
    resultado = false;
  }
  return resultado;
}

// Desafio 2
function calcArea(base,height) {
  return (base*height)/2;
}


// Desafio 3
function splitSentence(frase) {
  const words = frase.split(' ');
  return words;
}

// Desafio 4
function concatName(array) {
  let primeiro = array[0];
  let indiceUltimo = array.length -1;
  let ultimo = array[indiceUltimo];
  return ultimo + "," + " " + primeiro;
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
