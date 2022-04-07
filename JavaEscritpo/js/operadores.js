var x;
var y;

/* Operadores de Atribuição */
x = y; // Atribuição

x += y; 
x = x + y; // Soma x + y

x -= y;
x = x - y; // Subtração x - y

x *= y;
x = x * y; // Multiplicação x * y

x /= y;
x = x / y; // Divisão x / y

x %= y;
x = x % y; // Resto x % y

x **= y;
x = x ** y; // Expoente x ** y

x <<= y;
x = x << y; // Atribuição bit a bit à esquerda x << y

x >>= y;
x = x >> y; // Atribuição bit a bit à direita x >> y

x >>>= y; 
x = x >>> y; // Atribuição bit a bit deslocamento à direita não assinado x >>> y

x &= y;
x = x & y; // Atribuição AND bit a bit x & y

x ^= y;
x = x ^ y; // Atribuição XOR bit a bit x ^ y

x |= y;
x = x | y; // Atribuição OR bit a bit x | y

/* Operadores de comparação */

var z;

z = x == y; // Retorna true, se x e y forem iguais

z = x != y; // Retorna true, se x e y forem diferentes

z = x === y; // Retorna true, se x e y forem iguais e do mesmo tipo. (Estreitamente igual)

z = x !== y; // Retorna true se os operandos não forem iguais ou não forem do mesmo tipo.

z = x > y; // Retorna true se x for maior que y

z = x >= x; // Retorna true se x for maior ou igual a y

z = x < y; // Retorna true se x for menor que y

z = x <= y; // Retorna true se x for menor que y

/* Operadores aritiméticos */

var a;

a = x + y; // Adição

a = x - y; // Subtração

a = x * y; // Multiplicação

a = x / y; // Divisão

a = x % y; // Resto

x++ // Incrementação

y-- // Decrementação

a = -x // Negação (-x)

a = +y // Adição (+x)

a = x ** y // Exponenciação

/* Bit a bit */

x & y; // And

x | y; // Or

x ^ y; // Xor

~ x // Not

x << y // Desloca x para y

x >> y // Desloca x para y descartando bits excedentes.

x >>> y // Desloca x para y descartando bits excedentes e preenchenedo com zeros à esquerda.

/* Operadores Lógicos */

var y;

y = x && y; // Operador And lógico

y = x || y; // Operador Or lógico

y = !x; // Operador Not lógico.

/* Strings */

var z = "Gustavo ";
var d = "da Silva Oliveira";

var e = z + d; // Concatenação de string

z += d // Atribuição de d para c

// Operador ternário

var libertadores = 3;

var f = "Palmeiras, Santos e São Paulo";
var g = "Corinthians"

var h = (libertadores >= 3) ? f : g; // Se tiver três libertadores, é o Santos, o Palmeiras ou o São Paulo, caso contrário é o Corinthians.

// Operadores unários

var i = [0, 1, 2, 3, 4, 5];

delete i[3]; // Deleta o índice número 3, ou seja, o número 2 do vetor. o índice 3 passa a ser undefined.

// Operador typeof

var j = 5;

typeof j; // Retorna number. typeof retorna o tipo do valor.

// Operador void

void (nada); // Mostra que uma expressão deve ser avaliada sem um tipo de valor.

// Relacional 

var k = "Gustavo"
var l = "Gustavo da Silva Oliveira";

// Operador in
var m = k in l; // Vai retornar true, pois há a palavra "Gustavo" na variável l.

// instanceof
k instanceof string; // O objetivo do instanceof é retornar se o tipo do objeto é verdadeiro.

