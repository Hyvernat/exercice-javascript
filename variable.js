//1-Les variables:-
//La définition d'une variable:-
//Une variable est un élément qui permet de stocke temporairement une valeur que l'on va pouvoir utilisé dans notre algoritheme

//Comment déclarer une variable?
//il suffit d'ecrire le mot clé qui est "var" et de mettre n'importe que nom SAUF il faut toujours commencé par une lettree apres si nous voulons mettre un un chiffre ou un underscorps(_)
//Voici un exemple:
var bismillah
//Comment assigner une valeur dans une variable?
//il y a deux manières d'assigner une valeurdans une variable.
//voici la premiere:
//nous pouvons mettre une valeur avec des chiffres(78), une chiffre a virgule(7.8), ou un chiffre négatif(-7)
//Exemple:
var bismillah = 5

//Voici la deuxieme: 
//Nous pouvons mettre des chaines de carateres avec des guillemets doubles(" "), ou des guillemets normals(' ')
//voici un exemple:
var bismillah_1 = "Salam aleikoum"
//et pour les afficher il suffit d'écrire le nom de la variable.
bismillah
bismillah_1

//Nous pouvonsregroupé deux variables, voici un exemple:
var a = "Bienvenue "
var c = "nouveaux"
//voici le résultat
a + c

//Les booléens:
//Ils permettent de stocker une information qi serai soit vraie soit fausse

var vrai = true
var faux = false
vrai
faux

//Les tableaux:
//Ils permettent de stocker une liste d'information 
//Comment créer un tableau?
//pour créer un tableau , il faut une variable avec son nom et un crochet pour stocké des informations
var eleves = ["Jean" , "John" , "Mario"]
//Il est possible de récuperer un élément dans un tableau en faisant;
eleves [1] //John

// Les objets:
//Ils permettent de stocker des informations plus complexes
var eleve ={
    clef: 'valeur',
    nom: 'Anne', 
    age: 17,
    notes:[20,10,15]
}
//Pour récuperer une valeur associé à une propriété il y a 2 notations possibles.
eleve.nom //Anne
eleve.notes//[20,10,15]
eleve['notes'] //[20,10,15]

//Types spéciaux:
//nous allons rencontrer certaines variables qui correcpondent à certains cas spécifiques.
undefined //quand on essaie d'accéder à
null
NaN //'not a number'