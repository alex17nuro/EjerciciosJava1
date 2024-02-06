function sumaNumerosPares(array) {
    // Filtrar números 
    const numerosPares = array.filter(numero => numero % 2 === 0);
  
    // Sumar números pares
    const suma = numerosPares.reduce((acumulador, numero) => acumulador + numero, 0);
  
    return suma;
}
  
// Ejemplo
const arrayEjemplo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resultado = sumaNumerosPares(arrayEjemplo);
  
console.log(`La suma de los números pares es: ${resultado}`);
