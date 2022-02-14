/**
 * De la lista de compras obtener lo siguiente:
 * - Lista de artículos que no encontraron.
 * - Total de la cuenta (artículos encontrados) considerando
 *   que el precio es sin descuento.
 */
 
 const compras = [
    {
        producto: 'Leche',
        encontrado: true,
        precio: 20,
        descuento: 5,
    },
    {
        producto: 'Huevo',
        encontrado: false,
        precio: 32,
        descuento: 0,
    },
    {
        producto: 'Atún',
        encontrado: true,
        precio: 11.50,
        descuento: 0,
    },
    {
        producto: 'Galleta',
        encontrado: true,
        precio: 15.70,
        descuento: 10,
    },
    {
        producto: 'Frijol',
        encontrado: false,
        precio: 17,
    },
    {
        producto: 'Arroz',
        encontrado: true,
        precio: 11,
        descuento: 0,
    },
    {
        producto: 'Gelatina',
        encontrado: true,
        precio: 9.70,
        descuento: 0,
    },
    {
        producto: 'Aceite',
        encontrado: true,
        precio: 38.10,
        descuento: 15,
    },
];

// Lista de artículos que no encontraron.

let noEncontrados = compras.filter( (compra) =>  compra.encontrado == false); // filtra los productos dando como condición que la propiedad encontrada sea false
console.log(noEncontrados);  // Imprime el arreglo de los productos que no fueron encontrados
noEncontrados.forEach((nombre) => console.log(`producto fuera de stock: ${nombre.producto}`) ); // ForEach recorre el arreglo y lo imprime en consola

// Total de la cuenta (artículos encontrados) considerando que el precio es sin descuento.

let encontrado = compras.filter((compra) => compra.encontrado); // filtra los productos encontrados donde el valor de encontrado sea true
let total = encontrado.reduce((acum, compra) => {  // reduce el arreglo de productos encontrados para devolver un solo valor., en este caso el total.
    let montoDescuento = (compra.precio * compra.descuento) / 100; // realiza la operación para calcular el descuento
    let precioFinal = compra.precio - montoDescuento; // Realiza la operación de quitarle al precio del producto el valor del descuento
    acum += precioFinal; // Acumula los precios de los productos y los va sumando
    return acum; // retorna el valor del acumulador
}, 0); // Valor inicial del acumulador.

console.log({encontrado}); // muestra en consola los productos en existencia
console.log(`total de la compra ${total}`); // arroja el total de la compra de los productos en existencia

