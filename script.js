//Variáveis
/*
var num = 1; //{1}
num = 3; //{2}
var price = 1.5; //{3}
var myName = 'Packt'; //{4}
var trueValue = true; //{5}
var nullVar = null; //{6}
var und; //{7}*/
/*Na linha {1}, temos um exemplo de como declarar uma variável 
em JavaScript (declaramos um número).
Na linha {2}, atualizamos uma existente.
Na linha {3}, declaramos um número, porém dessa vez foi um número
decimal de ponto flutuante.
Na linha {4}, declaramos uma string; na {6}, declaramos um valor null;
na linha {7}, uma variável undefined(ou seja, foi declarada mas não 
    recebeu nenhum valor).
*/
/*
console.log('num: ' + num);
console.log('myName: ' + myName);
console.log('trueValue: ' + trueValue);
console.log('price: ' + price);
console.log('nullVar ' + nullVar);
console.log('und ' + und);
*/
/* O método console.log também aceita mais que apenas argumentos. Em 
vez de console.log('num: ' + num), também podemos usar
console.log('num: ', num). Enquanto a primeira opção concatena em uma
única string, a segunda permite adicionar uma descrição e visualizar
o conteúdo da variável caso ela seja um objeto.*/


//Escopo das variáveis
/* O escopo se refere ao local em que podemos acessar a variável no 
algoritmo (também pode ser em uma função quando trabalhamos com 
escopos de função). As variáveis podem ser locais ou globais.*/
/*
var myVariable = 'global';
myOtherVariable = 'global';
function myFunction() {
    myVariable = 'local';
    return myVariable;
}
function myOtherFunction() {
    myOtherVariable = 'local';
    return myOtherVariable;
}
console.log(myVariable); //{1}
console.log(myFunction()); //{2}
console.log(myOtherVariable); //{3}
console.log(myOtherFunction()); //{4}
console.log(myOtherVariable); //{5}
*/
/* O código anterior pode ser explicado assim:
Linha{1}, exibirá global porque estamos referenciando uma variável global.
Linha{2}, exibirá local porque declaramos a variável myVariable dentro
da função myFunction como uma variável local, portanto o escopo está apenas
no interior do myFunction.
Linha{3}, exibirá global porque estamos referenciando a variável global
chamada myOtherVariable, inicializada na segunda linha linha do exemplo.
Linha{4}, exibirá local. Na função myOtherFunction, referenciamos a variável
global myOtherVariable e lhe atribuímos o valor local, pois não declaramos 
a variável usando a palavra reservada var.
Linha{5}, pelo motivo anterior, essa linha exibirá local(pois alteramos o 
valor da variável em myOtherFunction).
SEMPRE que possível evitar um número elevado de variáveis globais.*/

// OPERADORES

/* São necessários quando realizamos qualquer operação em uma linguagem 
de programação. JavaScript também possui operadores aritméticos de 
atribuição, de comparação, lógicos, bit a bit(bitwise) e unários.
Alguns exemplos:
*/
/*
var num = 0; //{1}
num = num + 2;
num = num * 3;
num = num / 2;
num++;
num--;
num += 1; //{2}
num -= 2;
num *= 3;
num /= 2;
num %= 3;
console.log('num == 1 : ' + (num == 1)); //{3}
console.log('num === 1 : ' + (num === 1));
console.log('num != 1 : ' + (num != 1));
console.log('num > 1 : ' + (num > 1));
console.log('num < 1 : ' + (num < 1));
console.log('num >= 1 : ' + (num >= 1));
console.log('num <= 1 : ' + (num <= 1));
console.log('true && false : ' + (true && false)); // {4}
console.log('true || false : ' + (true || false));
console.log('!true : ' + (!true));
*/
/* Na linha {1}, temos os operadores aritméticos:
    Operador      | Descrição
    +               Soma
    -               Subtração
    *               Multiplicação
    /               Divisão 
    %               Módulo (resto de uma operação de divisão)
    ++              Incremento
    --              Decremento
*/
/* Na linha {2}, temos os operadores de atribuição:
Operador de atribuição |        Descrição
    =                       Atribuição
    +=                      Atribuição de soma(x += y)==(x = x + y)
    -=                      Atribuição de subtração(x -= y)==(x = x - y)
    *=                      Atribuição de multiplicação(x *= y)==(x = x * y)
    /=                      Atribuição de divisão(x /= y)==(x = x / y)
    %=                      Atribuição de resto(x %= y)== (x = x % y)
*/
/* Na linha {3}, temos os operadores de comparação:
Operador de comparação |        Descrição
    ==                      Igual a
    ===                     Igual a (tanto o valor quanto o tipo de objeto)
    !=                      Diferente de    
    >                       Maior que
    >=                      Maior ou igual a
    <                       Menor que
    <=                      Menor ou igual a 
*/
/* Na linha {4}, temos os operadores lógicos:
Operador lógico         |       Descrição
    &&                              E       
    ||                              Ou
    !                               Negação
*/
// A linguagem JavaScript também tem suporte para operadores bit a bit (bitwise):
/*
console.log('5 & 1:', (5 & 1));
console.log('5 | 1:', (5 | 1));
console.log('~ 5:', (~5));
console.log('5 ^ 1:', (5 ^ 1));
console.log('5 << 1:', (5 << 1));
console.log('5 >> 1:', (5 >> 1));
*/
/* Detalhes na tabela a seguir de operadores bit a bit:

Operador bit a bit(bitwise)     |       Descricao
        &                                   E
        |                                   Ou
        ~                                   Negacao
        ^                                   Ou exclusivo(xor)
        <<                            Deslocamento p/ esquerda(left shift)
        >>                            Deslocamento p/direita(right shift)

O operador typeof devolve o tipo da variável ou expressão, observamos o 
codigo a seguir:*/
/*
console.log('typeof num:', typeof num);
console.log('typeof Packt:', typeof 'Packt');
console.log('typeof true:', typeof true);
console.log('typeof [1,2,3]:', typeof [1,2,3]);
console.log('typeof {name:John}:', typeof {name:'John'});
*/
/* De acordo com a especificação, há dois tipos de dados em JavaScript:
* Tipos de dados primitivos: null(nulo), undefined(indefinido), 
string, number(numero), boolean(boleano) e symbol(símbolo);
* Tipos de dados derivados/objetos: objetos JavaScript, incluindo 
funções, arrays e expressóes regulares.
A linguagem JavaScript também aceita o operador delete, que apaga
a propriedade de um objeto: */
/*
var myObj = {name: 'John', age: 21};
delete myObj.age;
console.log(myObj); // exibe Object {name: "John"}
*/
// Nos algoritmos deste livro, serão apresentados alguns destes operadores.
/*
Verdadeiro e falso:
Na maioria das linguagens os valores booleanos true e false representam
os resultados verdadeiro/falso. Em JavaScript, uma string como Packt é
avaliada como true. Vamos observar a tabela:

    Tipo de valor       |       Resultado
    undefined                   false
    null                        false
    Boolean                 Verdadeiro é true e falso é false
    Number                O resultado é false para +0, -0 ou NaN; caso contrário, é true
    String                O resultado é false se a string for vazia(o tamanho é 0); caso contrário, é true(tamanho >= 1)  
    Object                      true

Vamos observar alguns exemplos: */
/*
function testTruthy(val) {
    return val ? console.log('trusthy') : console.log('falsy');
}
testTruthy(true); // true
testTruthy(false); // false
testTruthy(new Boolean(false)); // true (objeto é sempre true)
testTruthy(''); // true
testTruthy('Packt'); // false
testTruthy(new String('')); // true (objeto é sempre true)
testTruthy(1); // true
testTruthy(-1); // true
testTruthy(NaN); // false
testTruthy(new Number(NaN)); // true (objeto é sempre true)
testTruthy({}); // true (objeto é sempre true)
var obj = { name: 'John' };
testTruthy(obj); // true
testTruthy(obj.name); // true
testTruthy(obj.age); // age (propriedade não existe)
*/
/*

Funções dos operadores de igualdade (==e==)
Os dois operadores de igualdade aceitos em JavaScript causam um pouco
de confusão ao serem utilizados.
Quando == é usado, os valores poderão ser considerados iguais mesmo 
se forem diferentes. Vamos analisar como == funciona abaixo:
*/
alert ('E vamos que vamos');

