// Tu peux faire CTRL + SHIFT + P puis tu tappes "quokka start"

console.log('Bismillah')
// Ok, donc quokka, ca sert a executer du javascript directement
// et voir le resultat directement sans meme sauver le fichier
// ( que voulez vous dire "sauver le fichier?")
//-> Normalement pour voir le resultat de ton code tu dois sauvegarder le fichier(oui en faisant CTRL+S je le fait trés souvent )
// Voila, avec Quokka ca marche sans sauvegarder
// regarde, tu vois en bas?(oui)
// on a pas sauve et on voit le resultat.
// (daccord vraiment pas mal)

// C'est utile quand tu essaye de faire des algo un peu complexe
// Ou quand tu veux ecrire des trucs en javascript

// Ok, donc on va revoir ce que tu as appris hier.

// 1. C'est quoi la difference entre const et let?
//
// Alors, let c'est pouyr définir une variable
// et const il fait référence à une valeur; c'est bien ca
// Let fait aussi reference a une valeur, non?
// non enfin c'est ce que j'ai compris .
// ok
// Donc let
let a = 10
// Et const
const b = 10
console.log(`a:`, a, `b:`, b)
// Tu vois on peux stocker des valeurs avec les deux
// La difference c'est que const tu peux pas changer sa valeur
// b = 5
// tandis que avec let tu peux
a = 5
console.log('a est maintenant', a)

// C'est compris? ok je prend note pour mieux comprendre inchallah
// Qu'est-ce que tu n'as pas compris?ton explication etait plus clair que la mienne c'est tout
// Donc on va utiliser const quand on veut assigner une valeur qu'on ne va pas changer
// Et on va utiliser let quand on veut pas changer cette valeur.
// ok,

// 2. Quelle est la difference entre var et let?
//la différence c'est que let il déclare des variables , alors que var il défini une variable globale.
// Ok, c'est pas mal. Grafikart, il a dit que var c'etait une variable globale?
//euh , ca peut etre une var locale aussi , j'ai regarde qu'une video avec Grafika
// Pardon, hihi
// Je pense pas qu'elle soit globale en tout cas, ce qui se passe avec var, c'est le hoisting
// En gros ca veut dire qu'il va sortir la declaration de la variable et la mettre dans le haut du fichier
// Une variable globale c'est different
if (false) {
  // Debut du bloc
  var a1 = 1
  let a2 = 2
} // fin du bloc
console.log(a1) // undefined
// console.log(a2) // erreur: a2 is not defined
// tu vois, ici quand on console.log a1, on a pas une erreur on a undefined
// mais pour a2 on a une erreur, parce que la definition de la variable a ete faite dans un block, donc on a access a cette variable que dans ce block.

// En generale on n'utlise plus `var`, on utilise que const et let. Parce que var peut causer des trucs bizarres.
// Le mieux c'est que dans ton code tu utilises jamais `var`

// 3. C'est quoi la diffence entre declaration d'une variable et assignement d'une variable?
// (ca c'est je pense pas que c'etait dans ton cours d'hier), mais c'est important)
// بسم الله
// ok juste laisse bien reflechir
// Tu peux chercher sur internet pour repondre si tu veux
//ok,la définition d'une varible : une variable est un conteneur qui sert a stocker des informations de maniére temporaire.
// bon ca repond pas a la question hihi
// La declaration d'une variable c'est ca, (mais je pense on dit plus declaration sorry)
let c
// L'assignement c'est ca:
c = 10
//j'ai pas termine c'est pour ca ^^
// Ok, quand tu reponds a une question, il faut etre precise, tu n'as pas besoin d'expliquer tout, il faut juste
// repondre a la question.
//ok
// Donc tu as compris la difference entre declaration et assignement?
// Donc, une const, on va pouvoir lui assigner une valeur une seule fois. Let et var on peut lui assigner des valeurs
// autant de fois qu'on veut. C'est bien compris?
// oui du coup pour assigner une variable on utilise(=) et pour déclarer une variable on utilise(_).
// => on utilise `_` ? Je comprends pas

// pour declarer une variable en javascript on utilise const, let ou var
const maConstante = 2
let maVariable = 3
var monAutreVariable = 4

//j'ai regardé sur internet ils disent ca :Le nom d'une variable doit obligatoirement commencer par une lettre ou un underscore ( _ ) et ne doit pas commencer par un chiffre ; => bon ca c'est pas la meme chose
// Ca c'est pas la meme chose, ca parle de comment on va ecrire le nom de la variable
// donc un nom de variable ca doit commencer par une lettre ou un underscore
let ma_variable = 12
let _ma_variable = 12
// Voila deux variables avec un nom different.
// désolée , ok j'ai compris
// Pas de soucis, l'important c'est de comprendre.
// oui ca commence a etre clair

// 4. Le backtick: C'est quoi l'avantage des backticks par rapport aux gillements?
let str = 'Ceci est un texte'
let str1 = 'Ceci est un texte'
let str2 = `Ceci est un texte` // <== backticks
// Est-ce que tu sais?
// je sais pas
// Ok, le point commun c'est que c'est deux manieres de declarer des chaines de caracteres.
// En JS, il n'y a pas de difference entre les simples guillements (') et les doubles guillements (")
// Mais si tu commences la chaine de caracteres avec une sorte, tu dois terminer avec la meme sorte.
// Pour les backticks, c'est nouveau et c'est vraiment utile.
// Par exemple
const age = 10
let sentence = 'Aissa a ' + age + ' ans' // <== Tu as compris ca? oui
console.log(sentence)
// Voila, les backticks ca permet d'ecrire ca d'une maniere plus simple
let sentence2 = `Aissa a ${age} ans`
console.log(sentence2)
// Donc en gros, ca permet d'inclure des variables a l'interieur de la chaine de caracteres, en utilisant ${}
// La valeur de la variable a l'interieur va etre evaluee et mise dans la chaine de caracteres
let sentence3 = `Aissa a age ans` // Tu vois ici ca ne marche pas, parce qu'on a pas mis la variable dans ${}
console.log(sentence3)
let sentence4 = `Aissa a $age ans` // Ici non plus
console.log(sentence4)

// Tu comprends?oui tres mieux maintenant alhamdoulilallah
// Voila, donc on peut dire avec nos mots, que l'avantage des backticks par rapport aux guillemets, c'est
// que avec les backticks on peut inclure des variables dans la chaine de caractere plus clairement.
// Ca s'appelle des "Template literals"

//ok,

//  j ai dernier quesiopn en combien de temps on apprend le javascript
// Ca depend de chaque personne, et ce que Allah lui a donne comme comprehension et memorization.
// En tout cas c'est un des languages le plus utilise et il y a beaucoup de boulot la dedans,
// moi j'ai travaille pendant 3 ans rien qu'avec le javascript avant de commencer a travailler avec un autre language
// C'est important de bien apprendre une chose avant de passer a autre chose vraiment
// C'est ce qu'on reproche aux formations comme la tienne. Tu apprends plusieurs languages alors que tu en maitrises pas encore un seul
// Quand tu apprends trop de choses differentes, c'est comme si tu as rien appris, parce que tu sais rien faire de concret
// Essayes de bien de concentrer sur le javascript pendant le stage et tu auras vraiment un truc utile inchallah.
// Avec JS tu peux faire des sites internet, des dashboard, des applications mobiles pour android et iOS, des backends
// Des applications pour windows ou macOS
// C'est pas petit
// Mais pour ca il faut d'abord apprendre le language, sinon on peut rien faire.
// je vous ai pose cettequestion car avecma formatio on la appris super vite et on as tous de problemes avec le js
// c'est pour ca que j'ai beaucoup de l'accune j'ai appris le js en 5jours vous me croyez !! c'est pas du tout asser pour un personne qui ne connais pas le langage
// c'est clair
// Maintenant, c'est a toi de te rattraper, il faut te former.
// Moi j'ai appris js tout seul sur les plateformes, j'ai fais beaucoup d'exercices, j'ai galere,
// et maintenant alhamdulillah je suis paye pour ecrire du code
// Ca demande du travail.
// Tu auras pas une ecole qui va t'apprendre bien, c'est a toi de faire les efforts.
// Il y a enormement de cours sur le net.
// Un truc super important, c'est que quand tu comprends pas quelque chose, il faut essayer de savoir ce que tu comprends pas
// Comme ca tu peux chercher, pour apprendre ce truc que tu comprends pas
// Par exemple quand tu lis du code, et tu vois un truc que tu comprends pas, tu t'arrete, et tu essayes de cerner c'est quoi le truc que tu as pas compris.
// Une fois que tu l'as cerne, tu essayes de formuler une question pour chercher la reponse.
// Faut pas passer au dessus et le laisser, il faut tout comprendre
// c'est clair j'ai commencer a apprendre seul le html et css
// C'est bien, mais javascript c'est beaucoup plus complique a apprendre, tu fais des logiques
// HTML et css, c'est juste pour de l'affichage, pas de logique la dedans.
// Avec javascript c'est vraiment la que commence la programmation

// 5. Destructuring
let [val1, val2, val3] = [1, 2, 3]
console.log(val1, val2, val3)
// Comment on ecrit ca sans le detructuring?
// Est-ce que tu sais?
// C'est quoi son equivalent sans utiliser la destructuration?
// Tu peux dire non, ya pas de probleme hihi (non )
// Je pense pas que tu as pu comprendre le destructuring avec la video que je t'ai donne
// Tu comprends bien les tableaux en javascript ou pas encore?(pas encore)
// Bon ben tu peux pas comprendre le destructuring avant de comprendre les tableaux.

const tableau = [1, 2, 3]
// Bon, ca va prendre trop de temps de faire ca par ecrit, je vai te donner un cours.
// Essaye avec grafikart: https://grafikart.fr/formations/debuter-javascript
// Tu fais la partie La base: les variables. Apres tu mecris un resume de tout ce que tu as vu dedans
//ok , je sais pas pk mais je sens que je vais vous prendre beaucoup de votre temps
// Moi, ce que je veux c'est que tu apprennes les bases comme ca tu peux te debrouiller toute seule par la suite.
// Le but c'est que tu deviennes independante.
// Maintenant un stagiaire, tu as deux possibilites, soit tu t'occupes de lui, soit tu le laisse galerer.
// Si tu t'occupes de lui, c'est clair que ca prend du temps. C'est normal. c'est pour ca dans beaucoup d'entreprises
// S'ils voient que le stagiaire a du mal, ils ne l'aident pas, parce que ca prend du temps aux autres developpeurs
// Ca prend plus de temps d'expliquer une tache a un debutant plutot que de la faire soi meme.
// (Et je parle pas du temps d'execution, je parle juste du temps d'explication de la tache)
// Et on sait ca, Sofiane et moi. C'est normal.
// Maintenant, ta responsabilite c'est de faire des efforts, parce que pour accomplir des taches dans le stage,
// Tu as des prerequis, des choses que tu dois connaitre
// Git, javascript, ca en fait partie. Si tu as des manquements dans ces prerequis, ta tache, c'est de combler a ces manquements
// C'est pas grave si tu accomplis pas de taches, tant que toi tu avances, ta comprehension s'ameliore, tu apprends a coder petit a petit.
// C'est ca qui est important, c'est que quand tu sortes du stage, tu aies appris un truc qui va t'etre utile dans ton metier plus tard.
// Donc vas-y fais des videos, puis apres tu fais des resumes sur ce que tu as appris,
// comme ca on peut te dire si tu as compris ou pas
// Comme avec les promises, si tu avais pas essaye de l'expliquer, on aurait pas compris que tu avais pas compris les promises.
// Ben, on va essayer de faire ca pour chaque chose en javascript comme ca tu vas essayer d'apprendre les bases correctement,
// meme si ca prend tout le stage
// Je vai en parler a sofian inchallah
//ok
//ok c'est noté inchallah , barakallahoufik

// Essaye de faire un nouveau projet ou tu stockes tes notes, comme ce fichier
// Donc dans tu crees un nouveau dossier quelque part sur ton ordi, et tu ouvres avec vscode.
// Tu peux mettres ce fichier dedans deja, un fichier par cours par exemple
// Donc la tu fais un nouveau fichier 1-variables.js par exemple et tu mets tes notes de cours la bas
// comme ca tu peux executer du javascript dedans avec quokka, et moi je peux revoir tes notes apres le cours
//donc , je vais le faire de suite juste le dossier que je vais creer je ne suis pas obliger de le créer avec vuetify et vue master
// non pas besoin, c'est pour du js pour le moment, donc juste des fichiers javascripts simple, pas de vue
// pour pouvoir travailler avec vue efficacement, il faut d'abord bien comprendre javascript,
// sinon tu vas pas faire du bon boulot
//je le creer normal , c'est juste pour tester .
//ok bah je vais le faire inchallah
//d'accord

// Il y a cette plateforme qui est bien pour apprendre les bases aussi:
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#basic-javascript
// c'est en anglais, l'avantage c'est que tu as des exercices directement, donc tu verifies que tu as compris
// Je pense que c'est important pour toi, parce que parfois, tu crois que tu as compris et c'est pas le cas
// La mise en pratique, si tu as pas compris tu devrais pas arriver a le faire.
// Almuhim, il faut essayer de bien apprendre, bismillah
// Tu as pas bien appris durant la formation (5 jours c'est pas assez)
// Donc maintenant, faut essayer de rattraper ca.
// Je te laisse travailler inchaallah
// السلام عليكم ورحمة الله
// ok inchallah j'ai créer le le dossier comme vous m'avez dit je vais commencer directement inchallah
//wa aleikoum salam
