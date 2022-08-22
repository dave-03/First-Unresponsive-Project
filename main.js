/*var numero1 = parseInt(prompt("Dime el primer numbero"))
var numero2 = parseInt(prompt("Dime el segundo numero"))

if (numero1 > numero2 ) {
    console.log("El numero uno es mayor al numero dos");
    alert("El NUMERO UNO ES MAYOR")}
else if (numero1 < numero2){
    console.log("el numero dos es mayor al numero uno");
     alert(`El numero dos es mayor que numero 2  porque ${numero2} es mayor a ${numero1}`)}
else if (numero1 = numero2){
    console.log("Los numeros son iguales");
    alert("SON IGUALES")
} else {
    alert("NO SON NUMEROS")
}


console.log(numero1, numero2)

--------------------------------------------------------------------------------*/

function calculadora(numero1, numero2) {
    // Conjunto de instruccionesaejecutar
    console.log("Suma:" + (numero1 + numero2));
    console.log("Resta:" + (numero1 - numero2));
    console.log("Multiplicacion:" + (numero1 * numero2));
    console.log("División:" + (numero1 / numero2));
    console.log("***")
    // return"Hola soy la calculadora !!";
}
// Invocar o llamarala función
for (var i = 1; i <= 10; i++) {
    calculadora(i, 8)
}
//LLAMAR A LA FUNCION SIN BUCLE
calculadora(2, 5)

//FUNCIONES CALLBACK - ANONIMAS (llamo a una función sin definir como un parametro de otra función)

function listadoFrutas(fruta1, fruta2, ...resto_de_frutas) {
    1: ",frutal);
    2: ",fruta2);
}
console.log("Fruta1
console.log("Fruta
console.log(resto_de_frutas);
listadoFrutas("Naranja", "Manzana", "Sandia", "Pera", "Melon", "Coco");
var frutas = ["Naranja", "Manzana"];
listadoFrutas(...frutas, "Sandia", "Pera", "Melon", "Coco");

// Mostrar array en la consola
console.log(numeros);
// Ordenarymostrar
numeros.sort(function (a, b) { returna - b });
mostrarArray(numeros, 'ordenado');
// Invertirymostrar
numeros.reverse();
mostrarArray(numeros, 'revertido');
// Contar elementos
document.write("<h1>El array tiene:"numeros.length + "elementos");
// Busqueda
var busqueda = parseInt(prompt("Busca un numero", 0));
var posicion numeros.findIndex(numero => numero == busqueda);
if (posicion && posicion != -1) {
    document.write("<hr/><h1>ENCONTRADO</h1>");
    document.write("<h1>Posición de la busqueda:" + posicion + "</h1><hr/>");
    document.write("<hr/><h1>NO ENCONTRADO</h1><hr/>");
} else {
}
//EVENTOS DE JAVASCRIPT
// Focus
var input = document.querySelector("#campo_nombre");
input.addEventListener('focus', function () {
    console.log("[focus]Estas dentro del input");
});
// Blur
input.addEventListener('blur', function () {
    console.log("[blur]Estas fuera del input");
});
// Keydown
input.addEventListener('keydown',
    console.log("Pul");
});
// Keypress
// Keyup
