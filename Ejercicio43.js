/*43. Eliminar el último producto del carrito

Tema: pop()

const carrito = ['Pan', 'Leche', 'Huevos', 'Queso']
Elimina el último producto y muestra:

El producto eliminado.
El carrito actualizado.*/

const carrito = ['Pan', 'Leche', 'Huevos', 'Queso'];
const productoEliminado = carrito.pop(); // Elimina el último producto
console.log(`Producto eliminado: ${productoEliminado}`); // Muestra el producto eliminado
console.log(`Carrito actualizado: ${carrito}`); // Muestra el carrito actualizado
