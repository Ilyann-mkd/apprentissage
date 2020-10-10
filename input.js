
var prompt = require('prompt-sync')();

var name = prompt('Comment tu t\'appelles ?          ');
console.log('Bonjour à toi: '+name);

/* 
Présentation + recup des infos des deux users 
Affiche la grille vide 
Phase de placement des 3 pions/personne chacun leur tour + vérification alignement
Phase de déplacement des pions chacun leur tour + vérification alignement
fin du jeu lorsque trois pions alignés

Tant que personne n'a gagné 
    Prochain tour de jeu
    Vérification de l'alignement


*/


console.log("*****************************************************************************")
console.log("Organisation des dialogues avec les utilisateurs,pour représenter les tours de jeu")


