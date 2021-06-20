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


