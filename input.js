
var prompt = require('prompt-sync')();

var name = prompt('Quel est le nom du Joueur 1 ?          ');
var name2 = prompt('Quel est le nom du Joueur 2 ?          ');
console.log('Bonjour à vous '+name+ " et " +name2);

for(i=0 ; i < 3 ; i++){

    var toursJ1 = prompt( name+ " Où veut tu jouer ?")
    var toursJ2 = prompt( name2+ " Où veut tu jouer ?")

}
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


