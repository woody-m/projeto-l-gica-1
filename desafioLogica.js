let nome = prompt ("Me informe seu nome!");
const xpHeroi = prompt ("Me informe sua pontuação!");

if (xpHeroi <= 1000) {
    console.log("O herói de nome " + nome + " está no nível de Ferro!");
} else if (xpHeroi <= 2000) {
    console.log("O herói de nome " + nome + " está no nível de Bronze!");
} else if (xpHeroi <= 5000) {
    console.log("O herói de nome " + nome + " está no nível de Prata!");
} else if (xpHeroi <= 7000) {
    console.log("O herói de nome " + nome + " está no nível de Ouro!");
} else if (xpHeroi <= 8000) {
    console.log("O herói de nome " + nome + " está no nível de Platina!");
} else if (xpHeroi <= 9000) {
    console.log("O herói de nome " + nome + " está no nível de Ascendente!");
} else if (xpHeroi <= 10000) {
    console.log("O herói de nome " + nome + " está no nível Imortal!");
} else {
    console.log("O herói de nome " + nome + " está no nível Radiante!");
}
// switch case 
let nome1 = "Bruna";
const nivel = 1000;
switch (nivel) {
    case 1:
        console.log("O herói de nome " + nome1 + " está no nível de Ferro!");
        break;
    case 2:
        console.log("O herói de nome " + nome1 + " está no nível de Bronze!");
        break;
    case 3:
        console.log("O herói de nome " + nome1 + " está no nível de Prata!");
        break;
    case 4:
        console.log("O herói de nome " + nome1 + " está no nível de Ouro!");
        break;
    case 5:
        console.log("O herói de nome " + nome1 + " está no nível de Platina!");
        break;
    case 6:
        console.log("O herói de nome " + nome1 + " está no nível de Ascendente!");
        break;
    case 7:
        console.log("O herói de nome " + nome1 + " está no nível de Imortal!");
        break;
    case 8:
        console.log("O herói de nome " + nome1 + " está no nível de Radiante!");
        break;
    default:
        console.log("Nível desconhecido para o herói " + nome1 + "!");
}

