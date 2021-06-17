//les fonctions
//Elles permettent de stocker en memoire une certaine logique que l'on pourra utiliser a plusieurs reprises dans la suite de notre code.
//Elles prennent en général des parametres et retournent nun résultat particulier.
// voici un exemple de comment s'ecrit une fonction  
//var nombre = 31
//var estPremier = true 
//function estPremier(nombre){
 //   for (var i = 2;i < nombre; i++){
   //     if(nombre % i === 0){
     //       return false
       // }
    //}
    //return true
//}


//Les fonctions peuvent prendre plusieur paramètre 
//par exemple nous allons prendre une fonction qui est multiple de nombre
//function multiple(a,b){
//    if(b=== undefined){
//        b = 1
//    }
//    return a * b
//


// maintenant pour connaitre la moyenne d'une personne on peu faire:
          //Exercice eleves
//          var classA = [{
//            nom:'Marc',
//            moyenne: 15
//        }, {
//          nom:'Marion',
//            moyenne: 8
//        }, {
//            nom:'Antoinne',
//            moyenne: 4
//        }, {
//            nom: 'Jean',
//            moyenne: 14
//        }]
//        var classB = [{
//            nom:'Sebastien',
//            moyenne: 8
//        }, {
//          nom:'Marine',
//            moyenne: 4
//        }, {
//            nom:'Pedro',
//            moyenne: 14
//        }, {
//            nom: 'Violette',
//            moyenne: 14
//        }]
//      function afficheQuiALaMoyenne(eleves){
//          for(var i =0; i < eleves.length; i++ ) {
//              var eleve = eleves[i]
//              if(eleve.moyenne>= 10){
//                  console.log( eleve.nom + ' a la moyenne')
//              }
//
//          }
//      }
//      afficheQuiALaMoyenne(classA)
//      afficheQuiALaMoyenne(classB)
// Les fonctions en JavaScript sont un type de variable particulier, il est possible 
//de ne pas leur donner de nom, mais de les stocker dans une variable de manier classique
//var saluer = function (nom) {
//    return "Salut " + nom
//} 
//Il est cependant important de noter quelques points importants concernant les fonctions :
//Si la fonction ne return rien à la fin de son éxécution alors elle renverra automatiquement la valeur undefined.
//Si on appelle la fonction en mettant certains paramètres, ils prendront la valeur undefined
// voici quelques exemple pour les fonctions:
//Si on souhaite convertir un nombre de secondes en nombre de minutes on pourra se créer une fonction convert_to_min
//var convert_to_min = function (secondes)
//  return secondes / 60
//}
//convert_to_min(3600) // 60

//Si on souhaite rendre le paramètre optionel et lui assigner la valeur 0 par défaut, il nous suffira de rajouter une condition:
//var convert_to_min = function (secondes)
//  if (secondes === undefined) {
//    secondes = 0
//  }
//  return secondes / 60
//}
//convert_to_min(3600) // 60
//convert_to_min() // 0

//une fonction peut etre stockée dans la propriété d'un objet
//var eleve = {
//    nom: 'Marc',
//    note: 14,
//    present: function () {
//        return 'Je suis présent'
//    }
//}

//eleve.present() // 'Je suis présent'