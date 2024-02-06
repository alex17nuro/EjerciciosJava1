
const volumen = 16 * 23 * 13
console.log('volumen', volumen + ' cm3');

const arealateral = 23 * 13;
const areaBase = 16 * 23;
const areaTotal = arealateral + 2*areaBase;
console.log('areaTotal', areaTotal + 'cm2');


// Generalizamos
const base = 14;
const altura = 4;
const ancho = 15;

const volumen2 = base * altura * ancho;
console.log('volumen2', volumen2);

const area2 = base * altura + 2 * base * ancho;
console.log('area2', area2);