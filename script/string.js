// charAt() - Retorna o caractere no índice especificado (posição)
// charCodeAt() - Retorna o Unicode do caractere no índice especificado
// concat() - Une duas ou mais strings, e retorna uma nova string
// indexOf() Retorna a posição da primeira ocorrência encontrada de um valor especificado em uma string
// lastIndexOf() Retorna a posição da última ocorrência encontrada de um valor especificado em uma string
// length - Retorna o tamanho da String
// match() - Retorna um array resultante da busca com RegExp
// replace() - Substitui parte de uma string por outra
// search() - Retorna a posição a posição da string ou RegExp
// split() - Divide a string com base na expressão regular informada
// substring() - Extrai os caracteres de uma string, entre dois índices especificados
// toLowerCase() - Converte uma string em letras minúsculas
// toUpperCase() - Converte uma string em letras maiúsculas
// trim() - Remove espaço em branco das duas extremidades de uma string
// valueOf() - Retorna o valor primitivo da String

window.onload = function() {
    run();
};

function run(){
    var str = "Hello world, welcome to the universe.";
    var n = str.includes("world");
    console.log(n);
}