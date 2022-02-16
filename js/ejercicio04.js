/**
 * Del siguiente arreglo de número obtener lo siguiente: media, mediana y moda
 * El formato de la respuesta es:
 * {
 * media: 0,
 * mediana: 0,
 * moda: 0,
 * }
 *
 * NOTA: solo se puede utilizar: sort, filter, pop y reduce, para interactuar con el arreglo
 */
 
const datos = [ 12, 45, 17, 7, 22, 71, 50, 37, 10, 48, 17, 51, 17, 30, 12, 81];

// media
const acum = datos.reduce((previous, current) => current += previous);
const media = acum / datos.length;
console.log(`La media es: ${media}`);

// mediana
const numOrdenados = datos.sort((num1, num2) => {
    return num1 - num2;
});
console.log(numOrdenados);

if (numOrdenados.length%2==0){
    console.log('par');
    const ind1 = numOrdenados.length / 2 -1;
    const ind2 = ind1+1;
    console.log(ind1, ind2);
    const medianas = [numOrdenados[ind1],numOrdenados[ind2]];
    const mediaMediana = medianas.reduce((previous, current) => current+= previous);
    const mediana = mediaMediana/medianas.length;
    console.log(mediana);
} else {
    console.log('impar');
    const ind = numOrdenados.length / 2;
    console.log(numOrdenados[Math.trunc(ind)]); // el math.trunc elimina los decimales
};

//moda
const conteo = numOrdenados.filter(num => {
    return num==numOrdenados[5];
}).length;
console.log(conteo);

// formato 

