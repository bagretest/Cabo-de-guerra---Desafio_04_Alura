personagem = ["", "", ""];
viloes = ["", "", ""];
forcaPersonagem = 0;
forcaViloes = 0;
viloesPossiveis = ["Pikachu", "Squirtle", "Charmander", "Bulbasaur", "Ninetales"];

// criar uma lista com os personagens para o jogador
for (let i = 0; i < 3; i++) {
  // Lidar com os personagens do jogador
  escolhaPersonagem = prompt("Digite o nome do seu personagem " + (i + 1) + ":");
  personagem[i] = escolhaPersonagem;
  forcaPersonagem = forcaPersonagem + Math.floor(Math.random() * 10) + 1;
  
  // Lidar com os vilões
  indiceAleatorio = Math.floor(Math.random() * 5);
  viloes[i] = viloesPossiveis[indiceAleatorio];
  forcaViloes += Math.floor(Math.random() * 10) + 1;
}

console.log("Agora o array personagem contém: " + personagem);
console.log("Agora o array vilões contém: " + viloes);

// Comparar os times para saber quem venceu
if (forcaPersonagem > forcaViloes) {
  alert("Seu time é muito forte, seu time ganhou o cabo de guerra! Sua força foi: " + forcaPersonagem);
} else if (forcaPersonagem < forcaViloes) {
  alert("Seu time é fraquinho, os vilões ganharam o cabo de guerra com força de: " + forcaViloes);
} else {
  alert("Os dois times tem a mesma força! Vocês empataram com força de: " + forcaViloes);
}
