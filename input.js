
var prompt = require('prompt-sync')({"sigint":true});
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y','z'];

var laGrille = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
var players = [{name:'J1',mark:'O'}, {name:'J2',mark:'X'}];
players[0].name = prompt('Quel est le nom du Joueur 1 ?          ');
players[1].name = prompt('Quel est le nom du Joueur 2 ?          ');
console.log('Bonjour à vous ' + players[0].name + " et " + players[1].name);

console.log("Phase de placement")
for (i = 0; i < 3; i++) {

    for(joueur=0;joueur<2;joueur++){
        var tour = prompt(players[joueur].name + " Où veux tu jouer ?");
        var {i,j} = getCoordonnees(tour);
        laGrille[getIndex(i,j)] = players[joueur].mark;
        afficheGrille(laGrille);
    }
}

console.log("Phase de mouvement")
while (personnenaGagne()) {
    for(joueur=0;joueur<2;joueur++){
        var tour = prompt(players[joueur].name + " Qui comment on déplace ?");
        afficheGrille(laGrille);
    }
}

console.log("Bravo " + quiagagne() + ", tu as gagné !");

function personnenaGagne() {

    return getRandomInt(5) != 4;
}

function quiagagne() {

    return 'gagnant';
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getIndex(i,j){

    return i * Math.sqrt(laGrille.length) + j;
}

function afficheGrille(tab) {


    var tailleCote = Math.sqrt(tab.length);
    var output2 = "";
    if (Number.isInteger(tailleCote)) {
        console.log("taille du côté: " + tailleCote);
        // --> Afficher la Grille
        
        //console.log(output2 = "   1 2 3\n"+"A "+"|"+tab[0]+"|"+tab[1]+"|"+tab[2]+"|\n" + "B " + "|"+tab[3]+"|"+tab[4]+"|"+tab[5]+"|\n"+"C "+"|"+tab[6]+"|"+tab[7]+"|"+tab[8]+"|" );
        var laPremiereLigne = "";
        for (var k = 1; k <= tailleCote; k++) {
            laPremiereLigne += " " + k;
        }
        console.log("  " + laPremiereLigne);
        for (var i = 0; i < tailleCote; i++) {

            var affichageligne = traduitEnLettre(i) + " |";
            for (var j = 0; j < tailleCote; j++) {
                var idxM = i * tailleCote + j;
                affichageligne += tab[idxM] + "|";
            }

            console.log(affichageligne);
        }


    } else {
        console.log("Erreur, la Grille n'est pas carrée");
        console.log()



    }
}
function traduitEnLettre(numeroDeLettre){

    
    var reponse = "XX";     
    reponse = alphabet[numeroDeLettre];

    return reponse.toLocaleUpperCase();
}

function getCoordonnees(saisieUser){

    // validation des saisies utilisateur
        // la string contient 2 caractères
        if (saisieUser.length != 2){
            console.log ('Gros tu fais quoi là, il faut mettre 2 caractrères! \nRegarde : a3 ou C2');
            process.exit(1); // TODO: permettre a l'utilisateur de réessayer
        } 
        // le premier carac est une lettre minuscule, inférieur au max à la largeur de la Grille
        var premierCarac = saisieUser[0];
        // le 2eme carac est un chiffre, inférieur au max à la largeur de la Grille
        var deuxiemeCarac = saisieUser[1];

    // transformation des saisies
    var i=getRandomInt(3);// --> utiliser la variable alphabet pour retrouver l'index auquel on retrouve la valeur de premier carac
    var j=getRandomInt(3); // --> transformer deuxiemecarac en entier pui lui soustraire 1
    // bonus : gérer LowerCase / UpperCase

    return {i: i,j: j};
}