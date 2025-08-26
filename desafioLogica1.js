//calculadora de partidas hanckeada que mostar a colocacao dos jogadores//
const readline = require('readline-sync');
//No Node.js, require é usado para importar módulos (bibliotecas) que não estão no código.//
//O 'readline-sync' é um módulo externo que permite ler dados do usuário pelo terminal, de forma sincronizada.//

let jogadores = [];
// acima array para armazenar jogadores//

function receberDadosJogadores() { 
let nome = readline.question("Qual o seu nome? ");
let vitorias = parseInt(readline.question("Quantas vitórias você tem? "));
let derrotas = parseInt(readline.question("Quantas derrotas você tem? "));

let jogador = { nome, vitorias, derrotas };
jogadores.push(jogador);
}
// acima função para receber dados do jogador

function calcularSaldo(vitorias, derrotas) {
return vitorias - derrotas;
}
// acima função para calcular o saldo (vitórias - derrotas)

function determinarRanking(vitorias) {
if (vitorias < 10) return "Ferro";
else if (vitorias >= 11 && vitorias <= 20) return "Bronze";
else if (vitorias >= 21 && vitorias <= 50) return "Prata";
else if (vitorias >= 51 && vitorias <= 80) return "Ouro";
else if (vitorias >= 81 && vitorias <= 90) return "Diamante";
else if (vitorias >= 91 && vitorias <= 100) return "Lendário";
else return "Imortal"; // 101 ou mais
}
// acima função para determinar o ranking baseado nas vitórias//

let quantidade = parseInt(readline.question("Quantos jogadores deseja cadastrar? "));
for (let i = 0; i < quantidade; i++) {
console.log(`\nCadastro do jogador ${i + 1}`);
receberDadosJogadores();// Laço para cadastrar vários jogadores//
}

console.log("\n=== Ranking dos Jogadores ===");
jogadores.forEach(j => {
let saldo = calcularSaldo(j.vitorias, j.derrotas);
let ranking = determinarRanking(j.vitorias);
console.log(`${j.nome} - Vitórias: ${j.vitorias}, Derrotas: ${j.derrotas}, Saldo: ${saldo}, Ranking: ${ranking}`);
});// Mostrar os resultados//

// Consideracões finais : Ao testar o codigo funcionou perfeitamente//
// antes não estava funcionando porque tentei inserir os dados usando prompt//
// que é usado em navegadores, mas no Node.js usamos readline-sync para entrada de dados 