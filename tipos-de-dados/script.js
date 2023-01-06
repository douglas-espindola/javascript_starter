/*
7 tipos de Dados
Todos são primitivos exceto os objetos.

var nome = 'André'; // String
var idade = 28; // Number
var possuiFaculdade = true; // Boolean
var time; // Undefined
var comida = null; // Null
var simbolo = Symbol() // Symbol
var novoObjeto = {} // Object

*/

// Verificar tipo de Dado

var nome = 'Douglas';
var sobreNome = 'Brito Espindola';
var idade = 30;
var time = null; //Retornar um objeto
var simbolo = Symbol();
// console.log(typeof simbolo);

// String
/*
Você pode somar uma string e assim concatenar as palavras.
*/

var nomeCompleto = nome + ' ' + sobreNome;
// console.log(nomeCompleto);

/*
Você pode somar números com strings, o resultado final é sempre uma string.
*/

var gols = 1000;
var frase = 'Romário fez ' + gols + ' gols!';
// console.log(frase);
// console.log(typeof frase);


/*
Aspas Duplas, Simples e Template String
Não necessariamente precisamos atribuir valores a uma variável

'JavaScript é "super" fácil';
"JavaScript é 'super' fácil";
"JavaScript é \"super\" fácil";
`JavaScript é "super" fácil"`;
"JavaScript é "super" fácil"; // Inválido
*/

/*
Template String
Você deve passar expressões / variáveis dentro de ${}
*/
var objetoTeste = {
  nome: 'Jose',
  idade: 32
};
var frase1 = 'Roário fez ' + gols + ' gols';
var frase2 = `Romário fez ${gols} gols`; //Usando Template String
var frase3 = `Dados de nome e idade: Seu nome é ${objetoTeste.nome} e tem a idade de ${objetoTeste.idade}`; // Template String
// console.log(frase3);


/*
Exercício
Dica rápida, frases (string) devem ser colocadas entre aspas (simples ou duplas) e números não levam aspas.
*/

// Declare uma variável contendo uma string
var nomeDoSeuPet = 'Cacu';

// Declare uma variável contendo um número dentro de uma string
var idadeDoSeuPet = '5';

// Declare uma variável com a sua idade
var minhaIdade = 30;

// Declare duas variáveis, uma com seu nome
var primeiroNome = 'Douglas';

var segundoNome = 'Brito';

// e outra com seu sobrenome e some as mesmas
var nomeCompleto = `${primeiroNome} ${segundoNome}`;
console.log(nomeCompleto);

// Coloque a seguinte frase em uma variável: It's time
var primeiraFrase = "It's time";

// Verifique o tipo da variável que contém o seu nome
var VerificaTipoVariavel = typeof primeiroNome;

console.log(VerificaTipoVariavel);
// ou
console.log(typeof primeiroNome);