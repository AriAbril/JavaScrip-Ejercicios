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

let mediana = 0;
if (numOrdenados.length%2==0){
    console.log('par');
    const ind1 = numOrdenados.length / 2 -1;
    const ind2 = ind1+1;
    console.log(ind1, ind2);
    const medianas = [numOrdenados[ind1],numOrdenados[ind2]];
    const mediaMediana = medianas.reduce((previous, current) => current+= previous);
    mediana = mediaMediana/medianas.length;
    console.log(mediana);
} else {
    console.log('impar');
    const ind = numOrdenados.length / 2;
    mediana = numOrdenados[Math.trunc(ind)];// el math.trunc elimina los decimales
};
    console.log(mediana); 

//moda
    const moda = datos.sort((a,b) => // orden de elementos de acuerdo a su frecuencia en orden ascendente para que el que aparezca más veces esté al final
            datos.filter(v => v===a).length // conteo de frecuencia del elemento a 
            - datos.filter(v => v===b).length // conteo de frecuencia del elemento b
        ).pop(); // Pone el elemento que más se repite al final del arreglo 
    console.log(moda); 

// formato 
const formato = {
    media, // Variables de JS
    mediana,
    moda,
}; 
console.log(formato);


// NOTA: Cuando las variables del javaScript se llaman igual que las del formato, sólo se invocan las de javaScript.