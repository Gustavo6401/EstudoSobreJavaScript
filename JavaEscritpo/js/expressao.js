///* Operadores *///

//* Expressões Primárias *//

/* this */

var w;
this.w; // O operador this serve para se referir ao objeto atual.

//* Operador de agrupamento () *//

var x = 1;
var y = 2;
var z = 3;

// Precedência padrão (começa da multiplicação)
x + y * z // 7

// Mesma coisa da precedência padrão
x + (y * z) // 7

// Substituição de precedência
(x + y) * z; // 9

// Operador de agrupamento serve para fazer a substituição de precedência de uma operação

//* Comprehensions *//

// Comprehensions servem para criar um betor em cima de outro.

// [for (i of [1, 2, 3]) i*i];
// [1, 4, 9]

// [for (letras of ["A", "B", "C"]) letras.toLowerCase()];
// ["a", "b", "c"]

//* Expressão lado esquerdo *//

/* new */

// new serve para criar uma instância de um tipo de objeto definido

var a = new Number(4);
var b = new String("Gustavo");
var c = new Array(["Santos", "São Paulo", "Palmeiras", "Corinthians"]);

/* super */

// A palavra super permite chamar a função pai de um objeto

var d;

super([d]); // Chama o construtor pai

/* spread */

// O spread permite que uma expressão seja expandida em lugares onde são esperados vários argumentos.

var e = ["Naruto", "Dragon Ball"];
var f = ["Bleach", ...e, "Death Note"];

// O spread também funciona com chamadas de função

function w(g, h) { }

w(...e);