/*23. Mes del año

Tema: agrupación de casos

let mes = 'abril'
Muestra cuántos días tiene el mes:

30 días → "abril", "junio", "septiembre", "noviembre"
31 días → "enero", "marzo", "mayo", "julio", "agosto", "octubre", "diciembre"
28 días → "febrero"
Otro → "Mes no válido"*/

let mes = 'abril'
switch (mes) {
    case 'abril':
        console.log("30 días")
        break;
    case 'junio':
        console.log("30 días")
        break;
    case 'septiembre':
        console.log("30 días")
        break;
    case 'noviembre':
        console.log("30 días")
        break;
    case 'enero':
        console.log("31 días")
        break;
    case 'marzo':
        console.log("31 días")
        break;
    case 'mayo':
        console.log("31 días")
        break;
    case 'julio':
        console.log("31 días")
        break;
    case 'agosto':
        console.log("31 días")
        break;
    case 'octubre':
        console.log("31 días")
        break;
    case 'diciembre':
        console.log("31 días")
        break;
    case 'febrero':
        console.log("28 días")
        break;
    default:
        console.log("Mes no válido")
        break;
}