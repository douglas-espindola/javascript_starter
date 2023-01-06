// var nome = 'Douglas';
// var idade = '30';
// var possuiFaculdade = true;
// console.log(nome, idade, possuiFaculdade);

// Variáveis evitam repetições DRY(Don't repeat youself)
var preco = 25;
var totalComprado = 5
var totalPreco = preco * totalComprado;
// console.log(totalPreco);


// Declarando varias variáveis Usando vírgula
var sobrenome = 'Brito', cidade = 'Belém';
// console.log(sobrenome, cidade);

// Sem valor (return undefined)
var precoAplicativo;
// console.log(precoAplicativo);

//Hoisting (As variáveis são movidas para cima do código, porém o valor atribuído não é movido).
// console.log(nome);
// var outroNome = 'Doug';

// Forma correta

var profissao = 'Designer';
// console.log(profissao);



// ===== // Mudar o valor atribuído
/*
É possível mudar os valores atribuídos a variáveis declaradas com var e let. Porém não é porém não é possível modificar valores das declaradas com const
*/

const possuiMestrado = true;
// possuiMestrado = false
// return um erro










// Exercício

/*
Dica rápida, frases (string) devem ser colocadas entre aspas (simples ou duplas) e números não levam aspas.
*/

// Declarar uma variável com o seu nome
let meuNome = 'Douglas Brito Espíndola';

// Declarar uma variável com a sua idade
let minhaIdade = 30;

// Declarar uma variável com a sua comida
// favorita e não atribuir valor
var minhaComidaPreferida;

// Atribuir valor a sua comida favorita
minhaComidaPreferida = 'Sequência de Caramrão';

// Declarar 5 variáveis diferentes sem valores
var aula = 'Aula 2',
  curso = 'JavaScript',
  professor = 'André',
  site = 'origamid.com',
  ferramenta = 'VSCode';

console.log(meuNome, minhaIdade, minhaComidaPreferida, aula, curso, professor, site, ferramenta);
