

/*
 **************** Exercice 1 *************************
*/
var resultat = 2 + 2;
var message = "Bonjour Adam";
console.log(message);
console.log(resultat);

/*
 **************** Exercice 2 *************************
*/

// Initialisation des inputs
var nbIlyann = 3;
var nbAdam = 2;
var pv = 5;

// Déduction à partir des Inputs
var tp = nbIlyann + nbAdam;
var pnv = tp - pv;


// Exemple d'erreur de typage des variables
var tmp = 3;
var tmp2 = 2;
var tmp3 = tmp + tmp2;
console.log(tmp3);

// Préparation et affichage du résultat
var output = "";

output += "Ilyann et Adam ont mangé " + tp + " pommes, parmis ces " + tp + " pommes " + pv + " étaient verreuses. \n";


// if(){}else if(){} else {}

if (pnv == 0) {
    output += "Aucune n'était verreuse.";
} else if (pnv > 1) {
    output += pnv + " n'étaient pas verreuses.";
} else {

    output += pnv + " n'était pas verreuse.";
}


/*
Les opérateurs
==   : égal
!=   : non-égal (différent)
>    : strictement supérieur
<    : strictement inférieur
<=   : inférieur ou égal
>=   : supérieur ou égal
*/

console.log(output);

/*
Exemple de commentaire un peu long
*/

var mekdad = ["Rabah", "Zakia", "Ilyann"];
console.log("La famille Mekdad est composée de: " + mekdad.length + " personnes.");
/*
Les tableaux sont indexés à partir de ZERO (0) zéro
*/
console.log("Pour afficher Zakia " + mekdad[1]);
console.log("Pour afficher Ilyann " + mekdad[2]);
console.log("Pour afficher une erreur " + mekdad[8]);
afficheMembreFamille(mekdad);
// Ajout d'un élément dans le tableau
mekdad[3] = "Adam";
afficheMembreFamille(mekdad);


function afficheMembreFamille(tableauDeLaFamille) {
    console.log("La famille est composée de :");

    for (i = 0; i < tableauDeLaFamille.length; i = i + 1) {
        console.log(tableauDeLaFamille[i]);
    }
    //	tableauDeLaFamille.length == 3
    //	i = 0 - 1 - 2 - STOP

    /*
    Autre manière de boucler, mais avec le compteur qui démarre à 1
    for(i=1 ; i <= tableauDeLaFamille.length ; i=i+1){
        console.log(tableauDeLaFamille[i-1]);
    }
    
    //	tableauDeLaFamille.length == 3
    //	i = 1 - 2 - 3 - STOP
    */

    /*Autre autre manière de boucler, mais avec une boucle TANT QUE
        i=0;
        while(i < tableauDeLaFamille.length){
    
              console.log(tableauDeLaFamille[i]);
            i=i+1;
        }
    */

}

/*
    Exercice sur les tableaux à 2 dimensions
*/
var tab1d = ['a', 'b', 'c'];
//afficheMembreFamille(tab1d);


var tab2D33 = [['x', 'o', 'x'], ['o', 'x', 'x'], ['o', 'o', 'm']];
afficheTab2D(tab2D33);

var tab2D44 = [['x', 'x', 'o', 'x'], ['x', 'o', 'x', 'x'], ['x', 'o', 'o', 'm'], ['x', 'o', 'o', 'm']];
afficheTab2D(tab2D44);

function afficheTab2D(tab) {

    var nb_colonnes = tab[0].length;

    var laPremiereLigne = "";
    for (k = 1; k <= nb_colonnes; k++) {
        laPremiereLigne += " " + k;
    }
    console.log("  " + laPremiereLigne);


    for (i = 0; i < tab.length; i = i + 1) {    // pour chaque élément de la première dimension

        //affiche une ligne avec les 3 éléments de la 2eme dimension
        var laLigne = ""; // xxx --> | x | x | x |

        for (j = 0; j < tab[i].length; j++) {  //pour chaque élément de la 2eme dimension

            //console.log(tab[i][j]); //affiche l'élément et un retour à la ligne            
            laLigne += "|" + tab[i][j];
            /*  if(j==2){
                  laLigne+= "|";
              }     */
        }
        // affiche la ligne
        console.log((i + 1) + " " + laLigne + "|");
    }

}

/*

    DEVOIRS 
*/
console.log("**************************************");
console.log("Représenter la grille du morpion, en utilisant seulement un tableau à une seule dimension");

var laGrille = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
afficheCarreAPartirTableau1D(laGrille);
var laGrille2 = ['a', 'b', 'c', 'd'];
afficheCarreAPartirTableau1D(laGrille2);
var laGrille3 = ['a', 'b', 'c'];
afficheCarreAPartirTableau1D(laGrille3);
var laGrille4 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y'];
afficheCarreAPartirTableau1D(laGrille4);
/*
Output attendu: 
   1 2 3
1 |a|b|c|
2 |d|e|f|
3 |g|h|i|
   1 2 
1 |a|b|
2 |d|e|
Erreur, la Grille n'est pas carrée
*/

function afficheCarreAPartirTableau1D(tab) {


    var tailleCote = Math.sqrt(tab.length);
    var output2 = "";
    if (Number.isInteger(tailleCote)) {
        console.log("taille du côté: " + tailleCote);
        // --> Afficher la Grille
        
        //console.log(output2 = "   1 2 3\n"+"A "+"|"+tab[0]+"|"+tab[1]+"|"+tab[2]+"|\n" + "B " + "|"+tab[3]+"|"+tab[4]+"|"+tab[5]+"|\n"+"C "+"|"+tab[6]+"|"+tab[7]+"|"+tab[8]+"|" );
        var laPremiereLigne = "";
        for (k = 1; k <= tailleCote; k++) {
            laPremiereLigne += " " + k;
        }
        console.log("  " + laPremiereLigne);
        for (i = 0; i < tailleCote; i++) {

            var affichageligne = traduitEnLettre(i) + " |";
            for (j = 0; j < tailleCote; j++) {
                var idxM = i * tailleCote + j;
                affichageligne += tab[idxM] + "|";
            }

            console.log(affichageligne);
        }


    } else {
        console.log("Erreur, la Grille n'est pas carrée");
        console.log()



    }
    /*
        taille du côté: 3
        [0;0][0;1][0;2]     [0][1][2]
        [1;0][1;1][1;2]     [3][4][5]
        [2;0][2;1][2;2]     [6][7][8]
        taille du côté: 2
        [0;0][0;1]          [0][1]
        [1;0][1;1]          [2][3]
        */
        /*
                        2 * 3 + 1 = 7
                        i * tc + j = idxM ==> transforme des coordonnées en 2 dimension vers 1 dimension
                        2 * 3 + 2 = 8
                        0 * 3 + 0 = 0
                        0 * 3 + 1 = 1
        */


}

function traduitEnLettre(numeroDeLettre){

    // on le fait à notre sauce, mais on aurait aussi pu utiliser:
    // String.fromCharCode(97 + n);
        // qui s'appuie sur la table ASCII https://fr.wikibooks.org/wiki/Les_ASCII_de_0_%C3%A0_127/La_table_ASCII
    // ou encore 
    // char='abcdefghijklmnopqrstuvwxyz'.charAt(code);
    // qui est plus compact comme écriture mais moins lisible

    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y','z'];
    var reponse = "XX";     
    //console.log( "numeroDeLettre:" + numeroDeLettre + " " +alphabet[numeroDeLettre]);
    reponse = alphabet[numeroDeLettre];

    return reponse.toLocaleUpperCase();
}
