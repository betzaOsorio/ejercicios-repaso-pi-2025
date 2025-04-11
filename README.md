n# Hoja de trabajo I - PI 2025 | USPG

Este repositorio contiene un total de **50 ejercicios prácticos** organizados por tema y nivel de dificultad.  
Los ejercicios están pensados para reforzar los conocimientos adquiridos durante el curso de Programación I.

---

## ⚙️ ¿Cómo hacer un fork?

Si nunca has hecho un fork en GitHub, sigue estos pasos:

1. Ingresa al repositorio original en GitHub.
2. En la esquina superior derecha haz clic en el botón `Fork`.
3. Selecciona tu cuenta personal como destino.
4. GitHub creará una **copia del repositorio en tu cuenta**.
5. Desde tu fork, haz clic en el botón `Code` y copia la URL.
6. Abre VS Code y clona el repositorio con:

```bash
git clone https://github.com/tu-usuario/nombre-del-repo.git
```

---

## 📌 Instrucciones generales

1. Crea un **archivo `.js` por cada ejercicio**.  
   El nombre del archivo debe tener el formato:  
   `ejercicio01.js`, `ejercicio02.js`, ..., `ejercicio50.js`

2. Escribe tu solución en cada archivo.  
   Puedes incluir comentarios que expliquen tu lógica.

3. Una vez termines todos (o un bloque), **haz commit y push** a tu repositorio fork.

4. Envía el enlace de tu repositorio (fork) al aula virtual, correo o formulario asignado.

---

## 📁 Organización sugerida del repositorio

```
📦 tu-repo-fork/
 ┣ 📄 README.md
 ┣ 📁 ejercicios/
 ┃ ┣ ejercicio01.js
 ┃ ┣ ejercicio02.js
 ┃ ┣ ...
 ┃ ┗ ejercicio50.js
```

Puedes trabajar en la raíz o dentro de una carpeta `ejercicios/`, como prefieras.

---

## 💡 Recomendaciones

-   Trabaja por bloques temáticos (variables, operadores, condicionales, etc.).
-   Usa `console.log()` para probar tus soluciones.
-   Usa comentarios (`//`) para anotar tus ideas o pasos.
-   Si te atascas, repasa el tema correspondiente en tus apuntes o pregunta.

---

## 🧠 Objetivo

Al finalizar este repaso, deberías sentirte más seguro/a con los fundamentos de JavaScript:  
✦ Sintaxis básica  
✦ Tipos de datos  
✦ Lógica condicional  
✦ Bucles  
✦ Funciones  
✦ Arreglos y sus métodos

# ⛳ Ejercicios de la hoja de trabjo

## 🧩 **Variables y Tipos de Datos**

### 🟢 Básicos

**1. Edad del usuario**

_Tema: declaración de variable_

Declara una variable llamada `edad` y asígnale el valor `21`.

Muestra un mensaje en consola que diga:

`"Tu edad es 21 años"`.

---

**2. Datos personales unidos**

_Tema: concatenación_

Declara las siguientes variables:

```jsx
let nombre = 'Lucía'
let apellido = 'Méndez'
let pais = 'Guatemala'
```

Imprime en consola el mensaje:

`"Hola, soy Lucía Méndez de Guatemala"`.

---

**3. Verificar tipo de dato booleano**

_Tema: typeof_

```jsx
let estaRegistrado = true
```

Imprime en consola el mensaje:

`"El tipo de dato de estaRegistrado es boolean"`

---

### 🟡 Intermedios

**4. Sumar texto numérico convertido**

_Tema: conversión de string a number_

```jsx
let edadTexto = '25'
```

Convierte la variable a número y suma `5`.

Imprime el resultado final:

`"Edad más 5: 30"`

---

**5. Tipos especiales: null y undefined**

_Tema: valores especiales_

```jsx
let valorNulo = null
let valorIndefinido
```

Muestra el tipo de cada uno usando `typeof`

---

## 🧩 **Operadores y Expresiones**

### 🟢 Básicos

**6. Área de un rectángulo**

_Tema: operadores aritméticos_

```jsx
let base = 5
let altura = 10
```

Calcula el área del rectángulo

---

**7. Aplicar descuento**

_Tema: operadores aritméticos y porcentaje_

```jsx
let precioOriginal = 200
let descuento = 20 // porcentaje
```

Calcula y muestra el precio final después del descuento.

---

**8. Conversión de temperatura**

_Tema: expresiones matemáticas_

```jsx
let celsius = 30
```

Convierte a Fahrenheit usando la fórmula: `(celsius × 9/5) + 32`

---

### 🟡 Intermedios

**9. Comparación entre dos números**

_Tema: operadores de comparación_

```jsx
let numeroA = 15
let numeroB = 20
```

Muestra si `numeroA` es mayor, menor o igual que `numeroB`.

---

**10. Verificar si es par o impar**

_Tema: operador módulo `%`_

```jsx
let numero = 9
```

Muestra si el número es par o impar.

---

**11. Puede conducir o no**

_Tema: operadores lógicos `&&`_

```jsx
let edad = 22
let tieneLicencia = true
```

Usa una condición para verificar si puede conducir.

---

## 🧩 **Condicionales `if`, `else if`, `else`**

### 🟢 Básicos

**12. Mayoría de edad**

_Tema: if-else_

```jsx
let edad = 17
```

Si la edad es mayor o igual a 18, muestra `"Eres mayor de edad"`. Si no, muestra `"Eres menor de edad"`.

---

**13. Calificación mínima**

_Tema: if-else_

```jsx
let nota = 55
```

Si la nota es mayor o igual a 60, imprime `"Aprobado"`. Si no, imprime `"Reprobado"`.

---

**14. Descuento por edad**

_Tema: condición múltiple_

```jsx
let edad = 68
```

Muestra `"Descuento especial"` si tiene **menos de 12** o **más de 65 años**. De lo contrario, muestra `"Sin descuento"`.

---

### 🟡 Intermedios

**15. Clasificación de notas**

_Tema: else if_

```jsx
let nota = 83
```

Imprime:

-   `"A"` si es mayor o igual a 90
-   `"B"` si es entre 80 y 89
-   `"C"` si es entre 70 y 79
-   `"D"` si es entre 60 y 69
-   `"F"` si es menor a 60

---

**16. Ingreso a evento**

_Tema: operadores lógicos_

```jsx
let tieneEntrada = true
let estaEnLista = false
```

Muestra `"Puede ingresar"` solo si tiene entrada **y** está en lista. Si no, muestra `"Acceso denegado"`.

---

**17. Mayor de tres números**

_Tema: if-else anidado_

```jsx
let a = 10,
    b = 5,
    c = 7
```

Muestra cuál es el número mayor entre los tres.

---

### 🔴 Avanzados

**18. Validar usuario y contraseña**

_Tema: doble condición_

```jsx
let usuario = 'admin'
let contrasena = '1234'
```

Verifica si ambos valores son correctos.

Si lo son, imprime `"Acceso permitido"`; si no, `"Datos incorrectos"`.

---

**19. Calculadora básica**

_Tema: condiciones múltiples + operadores_

```jsx
let num1 = 12
let num2 = 3
let operacion = '+'
```

Usa `if/else if` para realizar:

-   Suma, resta, multiplicación o división según `operacion`. Muestra el resultado final.

---

## 🧩 **Switch**

### 🟢 Básicos

**20. Día de la semana**

_Tema: switch + números_

```jsx
let numeroDia = 3
```

Usa `switch` para mostrar el día correspondiente:

-   1 → "Lunes"
-   2 → "Martes"
-   3 → "Miércoles"
-   4 → "Jueves"
-   5 → "Viernes"
-   Cualquier otro número → "Día inválido"

---

**21. Menú de opciones**

_Tema: switch + strings_

```jsx
let opcion = 'editar'
```

Muestra según el valor de `opcion`:

-   `"ver"` → "Mostrando perfil"
-   `"editar"` → "Editando datos"
-   `"salir"` → "Saliendo del sistema"
-   Otro → "Opción no válida"

---

### 🟡 Intermedios

**22. Tipo de transporte**

_Tema: switch con texto_

```jsx
let tipo = 'bicicleta'
```

Muestra:

-   "Vehículo con motor" para `"carro"` o `"moto"`
-   "Vehículo sin motor" para `"bicicleta"` o `"patineta"`
-   "Tipo desconocido" si no coincide con ningún caso

---

**23. Mes del año**

_Tema: agrupación de casos_

```jsx
let mes = 'abril'
```

Muestra cuántos días tiene el mes:

-   30 días → "abril", "junio", "septiembre", "noviembre"
-   31 días → "enero", "marzo", "mayo", "julio", "agosto", "octubre", "diciembre"
-   28 días → "febrero"
-   Otro → "Mes no válido"

---

## 🧩 **Bucles `while` y `do...while`**

### 🟢 Básicos

**24. Contador del 1 al 10**

_Tema: `while`_

Imprime los números del 1 al 10 usando un ciclo `while`.

Cada número debe aparecer en una línea.

---

**25. Menú interactivo (simulado)**

_Tema: `do...while`_

Simula un menú que se muestra al menos una vez.

Si `opcion` es `"A"`, muestra `"Bienvenid@"`.

Si `opcion` es `"B"`, permita la entrada de un nombre y muestra `"Bienvenid@ ${nombreIngresado}"`.

Repite mientras `opcion` no sea `"3"`.

---

### 🟡 Intermedios

**26. Suma hasta 100**

_Tema: acumulador en `while`_

```jsx
const numeros = [10, 15, 20, 25, 30, 5]
```

Usa un ciclo `while` para sumar los elementos hasta que la suma llegue o supere 100.

Imprime la suma y cuántos números usaste.

---

**27. Juego del número secreto**

_Tema: `do...while` con condición_

```jsx
const NUMERO_SECRETO = Math.floor(Math.random() * 100) + 1
console.log(`El número secreto es: ${NUMERO_SECRETO}`)
```

Crea un juego que pide números hasta adivinar el número secreto.

Muestra: `"¡Adivinaste!"` cuando el intento sea correcto.

Haz que el valor de `intento` cambie dentro del bucle.

---

### 🔴 Avanzados

**28. Validación de contraseña**

_Tema: verificación en `do...while`_

```jsx
const CONTRASENA_CORRECTA = 'claveSegura'
```

Repite el ingreso de contraseña hasta que coincida con la correcta.

Muestra `"Contraseña incorrecta"` cada vez que falle y `"Acceso permitido"` al final.

---

## 🧩 **For y Arreglos**

### 🟢 Básicos

**29. Imprimir lista de frutas**

_Tema: `for` básico_

```jsx
const frutas = ['Manzana', 'Banano', 'Uva', 'Fresa', 'Sandía']
```

Imprime cada fruta en una línea usando un ciclo `for`.

---

**30. Sumar números del arreglo**

_Tema: acumulador_

```jsx
const numeros = [5, 10, 15, 20]
```

Suma todos los elementos del arreglo usando `for`.

---

**31. Contar números pares**

_Tema: condición dentro de `for`_

```jsx
const numeros = [2, 7, 10, 15, 22, 33]
```

Cuenta cuántos números del arreglo son pares.

---

### 🟡 Intermedios

**32. Buscar un nombre**

_Tema: búsqueda en arreglo_

```jsx
const nombres = ['Ana', 'Carlos', 'Pedro', 'Lucía']
```

Busca si `"Lucía"` está en el arreglo.

Si está, muestra `"Nombre encontrado"`.

Si no, muestra `"Nombre no encontrado"`.

---

**33. Subir nota a cada estudiante**

_Tema: modificación con `for`_

```jsx
let notas = [60, 70, 80]
```

Agrega 5 puntos a cada nota y muestra el nuevo arreglo.

---

### 🔴 Avanzados

**34. Promedio por estudiante (matriz)**

_Tema: matriz + anidado_

```jsx
const notas = [
    [80, 90, 100], // Estudiante 1
    [70, 60, 75], // Estudiante 2
    [88, 95, 92], // Estudiante 3
]
```

Calcula y muestra el promedio de cada estudiante en una lista.

---

**35. Invertir un arreglo**

_Tema: lógica con índices_

```jsx
const numeros = [1, 2, 3, 4, 5]
```

Crea un nuevo arreglo con los elementos invertidos: `[5, 4, 3, 2, 1]`

**No uses `.reverse()`**

---

## 🧩 **Funciones y Procedimientos**

### 🟢 Básicos

**36. Saludo personalizado**

_Tema: función con parámetro, sin retorno_

Crea una función llamada `saludar(nombre)`, Debe imprimir un saludo como:

`"Hola, Juan. Bienvenido a la clase de programación."`

Llama a la función con el nombre ingresado por el usuario.

---

**37. Área de un triángulo**

_Tema: función con retorno_

Crea una función calcularAreaTriangulo(base, altura). Debe retornar el área usando la fórmula `(base * altura) / 2`.

Llama a la función con los valores ingresados por el usuario e imprime el resultado.

---

### 🟡 Intermedios

**38. Verificar si un número es par**

_Tema: función condicional_

Crea una función esPar(numero). La función debe retornar `true` si el número es par, o `false` si es impar.

Prueba la función con el número `7`.

---

**39. Suma de arreglo**

_Tema: función con arreglo como parámetro_

Crea una función `sumarArreglo(arreglo)`. Debe retornar la suma total de los números ingresados por el usuario según un menú interactivo que permita ingresar un número y luego preguntar si desea ingresar más números hasta que ya no desee ingresar más números y que muestre la suma.

Utiliza `push` para ingresar cada número dado por el usuario

---

### 🔴 Avanzados

**40. Validar correo electrónico**

_Tema: lógica dentro de función_

Crea una función `validarCorreo(correo)`. Debe verificar si el string contiene `"@"` y `"."`

Si es así, muestra `"Correo válido"`, si no, `"Correo inválido"`.

Solicita un correo al usuario.

---

**41. Generar contraseña aleatoria**

_Tema: lógica con bucle dentro de función_

Crea una función `generarContraseña(longitud)`. Debe retornar una contraseña aleatoria con letras y números.

Ejemplo: `"a7d3g8"` si la longitud es 6.

(No necesitas usar caracteres especiales).

---

## 🧩 **Métodos de Arreglos**

### 🟢 Básicos

**42. Agregar un producto al carrito**

_Tema: `push()`_

```jsx
const carrito = ['Pan', 'Leche', 'Huevos']
```

Agrega `"Queso"` al final del arreglo.

Muestra el carrito actualizado.

---

**43. Eliminar el último producto del carrito**

_Tema: `pop()`_

```jsx
const carrito = ['Pan', 'Leche', 'Huevos', 'Queso']
```

Elimina el último producto y muestra:

-   El producto eliminado.
-   El carrito actualizado.

---

### 🟡 Intermedios

**44. Aplicar IVA a productos**

_Tema: `map()`_

```jsx
const productos = [
    { nombre: 'Zapatos', precio: 100 },
    { nombre: 'Camisa', precio: 80 },
]
```

Crea un nuevo arreglo con los precios incluyendo 12% de IVA.

Muestra el nuevo arreglo con los precios modificados.

---

**45. Filtrar estudiantes aprobados**

_Tema: `filter()`_

```jsx
const estudiantes = [
    { nombre: 'Ana', nota: 85 },
    { nombre: 'Luis', nota: 45 },
    { nombre: 'Carla', nota: 70 },
]
```

Filtra y muestra los estudiantes cuya nota sea **mayor o igual a 60**.

---

**46. Calcular promedio de notas**

_Tema: `reduce()`_

```jsx
const notas = [80, 90, 70, 100]
```

Usa `reduce()` para obtener la suma de las notas y luego calcula el promedio.

---

### 🔴 Avanzados

**47. Ordenar productos por precio**

_Tema: `sort()`_

```jsx
const productos = [
    { nombre: 'Monitor', precio: 300 },
    { nombre: 'Mouse', precio: 25 },
    { nombre: 'Teclado', precio: 100 },
]
```

Ordena el arreglo de productos **de menor a mayor precio**.

Muestra el arreglo ordenado.

---

**48. Verificar si un producto está en la lista**

_Tema: `includes()`_

```jsx
const productos = ['Mouse', 'Teclado', 'Monitor']
```

Verifica si `"Monitor"` está en el arreglo.

Muestra `true` o `false`.

---

**49. Combinar listas de invitados**

_Tema: `concat()`_

```jsx
const invitadosA = ['Carlos', 'Lucía']
const invitadosB = ['Pedro', 'Sofía']
```

Combina ambos arreglos en uno nuevo y muéstralo.

---

**50. Buscar posición de un color**

_Tema: `indexOf()`_

```jsx
const colores = ['Rojo', 'Verde', 'Azul', 'Amarillo']
```

Encuentra y muestra la **posición de "Azul"** dentro del arreglo.

---

¡Mucho éxito y a practicar se ha dicho! 🚀
