/* Calculadora de cuotas en base al precio final de el o los productos*/

let total = parseInt(prompt("Ingrese el precio total de el/los productos:"));

const numero_cuotas = parseInt(prompt("Desea pagar en 0, 3, 6, 8, o 12 cuotas?"));

let precio_cuotas;

switch(numero_cuotas){
    case 0:
        precio_cuotas = total;
        break;
    case 3:
        precio_cuotas = total/3;
        break;
    case 6:
        precio_cuotas = total/6;
        break;
    case 8:
        precio_cuotas = total/8;
        break;
    case 12:
        precio_cuotas = total/12;
        break;
    default:
        precio_cuotas = "no valido" 
}

if (precio_cuotas === "no valido"){
    alert("No es posible pagar en " + numero_cuotas + " cuotas")
}else{
    alert("El precio de las cuotas será de: " + precio_cuotas + " $");
}