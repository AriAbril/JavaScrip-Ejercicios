/**
 * Del siguiente arreglo obtener el número de veces que cada sabor de helado
 * aparece.
 * {
 * "Strawberry": 3,
 * "Vanilla": 4,
 * "Chocolate": 5,
 * "Cookies & Cream": 2,
 * "Mint Chocolate Chip": 3,
 * "Rocky Road": 1,
 * "Pistachio": 1,
 * "Banana": 1,
 * "French Vanilla": 1,
 * "Vanilla Bean": 1
 * }
 *
 * NOTA: el arreglo solo con reduce, dentro sí se pueden usar otros statements
 */

   const data = [{
      name: 'Tyler',
      favoriteIceCreams: ['Strawberry', 'Vanilla', 'Chocolate', 'Cookies & Cream']
   },
   {
      name: 'Richard',
      favoriteIceCreams: ['Cookies & Cream', 'Mint Chocolate Chip', 'Chocolate', 'Vanilla']
   },
   {
      name: 'Amanda',
      favoriteIceCreams: ['Chocolate', 'Rocky Road', 'Pistachio', 'Banana']
   },
   {
      name: 'Andrew',
      favoriteIceCreams: ['Vanilla', 'Chocolate', 'Mint Chocolate Chip']
   },
   {
      name: 'David',
      favoriteIceCreams: ['Vanilla', 'French Vanilla', 'Vanilla Bean', 'Strawberry']
   } ,
   {
      name: 'Karl',
      favoriteIceCreams: ['Strawberry', 'Chocolate', 'Mint Chocolate Chip']
   }
   ];

let initial = 
   {
      "Strawberry": 0,
      "Vanilla": 0,
      "Chocolate": 0,
      "Cookies & Cream": 0,
      "Mint Chocolate Chip": 0,
      "Rocky Road": 0,
      "Pistachio": 0,
      "Banana": 0,
      "French Vanilla": 0,
      "Vanilla Bean": 0
   }   

const flavorFreq = data.reduce((previus, current) =>{

   current.favoriteIceCreams.map((favoriteIceCream) =>{ previus[favoriteIceCream]++;}); // lee el arreglo y realiza un incremento cuando encuentra los sabores.

   return previus; // retorna el sabor previo

}, initial ); // concatena el formato

console.log(flavorFreq); 