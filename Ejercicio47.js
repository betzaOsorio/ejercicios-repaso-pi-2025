/*47. Ordenar productos por precio

Tema: sort()

const productos = [
    { nombre: 'Monitor', precio: 300 },
    { nombre: 'Mouse', precio: 25 },
    { nombre: 'Teclado', precio: 100 },
]
Ordena el arreglo de productos de menor a mayor precio.

Muestra el arreglo ordenado.*/

const productos = [
    { nombre: 'Monitor', precio: 300 },
    { nombre: 'Mouse', precio: 25 },
    { nombre: 'Teclado', precio: 100 },
]

const productosOrdenados = productos.sort((a, b) => a.precio - b.precio)
console.log(productosOrdenados) // [{ nombre: 'Mouse', precio: 25 }, { nombre: 'Teclado', precio: 100 }, { nombre: 'Monitor', precio: 300 }]
console.log(productosOrdenados[0].nombre) // Mouse
console.log(productosOrdenados[1].nombre) // Teclado
console.log(productosOrdenados[2].nombre) // Monitor
console.log(productosOrdenados[0].precio) // 25
console.log(productosOrdenados[1].precio) // 100
console.log(productosOrdenados[2].precio) // 300
console.log(productosOrdenados[0].nombre + ' ' + productosOrdenados[0].precio) // Mouse 25
console.log(productosOrdenados[1].nombre + ' ' + productosOrdenados[1].precio) // Teclado 100
console.log(productosOrdenados[2].nombre + ' ' + productosOrdenados[2].precio) // Monitor 300
console.log(productosOrdenados[0].nombre + ' ' + productosOrdenados[0].precio + ' ' + productosOrdenados[1].nombre + ' ' + productosOrdenados[1].precio + ' ' + productosOrdenados[2].nombre + ' ' + productosOrdenados[2].precio) // Mouse 25 Teclado 100 Monitor 300
