//Les variables ont une portée limitée lorsqu'elles sont déclarées dans une fonction:
//var nom = function(){
//    var a = "Salut"
//}
//console.log(a)

//les fonctions ont une portée localek, mais il est possible de faire appel à des variables externes a la fonction :
//var a = "Le monde"
//var nom = function(){
//    var a = "Salut"
//}
//nom()
//console.log(a)


//Par contre il faut faire attention car si une fonction fait appel à une variable
// extérieur, elle utilisera la valeur au moment de l'éxécution d'une fonction. 
//C'est ce que l'on appel le contexte, le code à l'intérieur de la fonction disposera
// des variables disponible lors de son éxécution.
// c'est pour ca qu'il est important de mettre le mot clé qui est "var" avant de nommé leur nom.


//l'Hoisting
//Le Javascript a une manière particulière de traiter les variables. Par défaut 
//il déplace les déclarations de en haut du contexte courant 
//(fonction courante ou fichier courant)
//a // undefined
//var a = 3