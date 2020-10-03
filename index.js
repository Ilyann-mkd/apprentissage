

/*
 **************** Exercice 1 *************************
*/
var resultat = 2+2;
var message = "Bonjour Adam";
console.log(message);
console.log(resultat);

/*
 **************** Exercice 2 *************************
*/

// Initialisation des inputs
var nbIlyann= 3;
var nbAdam= 2;
var pv= 5;

// Déduction à partir des Inputs
var tp= nbIlyann + nbAdam;
var pnv= tp-pv;


// Exemple d'erreur de typage des variables
var tmp=3;
var tmp2=2;
var tmp3=tmp + tmp2;
console.log(tmp3);

// Préparation et affichage du résultat
var output="";

output += "Ilyann et Adam ont mangé " + tp + " pommes, parmis ces " + tp + " pommes " + pv + " étaient verreuses. \n";


// if(){}else if(){} else {}

if( pnv==0 ){ 
 	output += "Aucune n'était verreuse.";
}else if( pnv > 1 ) { 	
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
console.log("Pour afficher Zakia " + mekdad[1] );
console.log("Pour afficher Ilyann " + mekdad[2] );
console.log("Pour afficher une erreur " + mekdad[8] );
afficheMembreFamille( mekdad);
// Ajout d'un élément dans le tableau
mekdad[3]= "Adam";
afficheMembreFamille(mekdad);


function afficheMembreFamille(tableauDeLaFamille){
    console.log("La famille est composée de :");

	for(i=0 ; i < tableauDeLaFamille.length ; i=i+1){
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



