var num = 1; //{1}
num = 3; //{2}
var price = 1.5; //{3}
var myName = 'Packt'; //{4}
var trueValue = true; //{5}
var nullVar = null; //{6}
var und; //{7}
/*Na linha {1}, temos um exemplo de como declarar uma variável 
em JavaScript (declaramos um número).
Na linha {2}, atualizamos uma existente.
Na linha {3}, declaramos um número, porém dessa vez foi um número
decimal de ponto flutuante.
Na linha {4}, declaramos uma string; na {6}, declaramos um valor null;
na linha {7}, uma variável undefined(ou seja, foi declarada mas não 
    recebeu nenhum valor).
*/
console.log('num: ' + num);
console.log('myName: ' + myName);
console.log('trueValue: ' + trueValue);
console.log('price: ' + price);
console.log('nullVar ' + nullVar);
console.log('und ' + und);
/* O método console.log também aceita mais que apenas argumentos. Em 
vez de console.log('num: ' + num), também podemos usar
console.log('num: ', num). Enquanto a primeira opção concatena em uma
única string, a segunda permite adicionar uma descrição e visualizar
o conteúdo da variável caso ela seja um objeto.*/
