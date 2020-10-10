
var prompt = require('prompt-sync')({"sigint":true});

var name = prompt('Quel est le nom du Joueur 1 ?          ');
var name2 = prompt('Quel est le nom du Joueur 2 ?          ');
console.log('Bonjour à vous ' + name + " et " + name2);

console.log("Phase de placement")
for (i = 0; i < 3; i++) {

    var toursJ1 = prompt(name + " Où veux tu jouer ?");
    var toursJ2 = prompt(name2 + " Où veux tu jouer ?");

}

console.log("Phase de mouvement")
while (personnenaGagne()) {
    var toursJ1 = prompt(name + " Qui comment on déplace ?");
    var toursJ2 = prompt(name2 + " Qui comment on déplace ?");
}

if(){

    console.log("Bravo" +name+ ", tu as gagné !");

}else {

    console.log("Bravo" +name2+ ", tu as gagné !");

}





function personnenaGagne() {

    return true;
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


