//L'opérateur this est une sorte de super variable qui prendra différentes valeurs
// suivant le contexte dans lequelle elle est utilisée.
//Par défaut this prend comme valeur la variable globale (window sur le navigateur,
// global sur nodejs) mais sa valeur peut changer dans une fonction suivant comment
// elle est appellée.

//var eleve = {
//    nom:'Jean',
//    present:function(){
//        console.log(this.nom + " présent")
//    }
// }
//eleve.present()

//Ce qu'il faut retenir :
//this prend comme valeur l'objet global par défaut,
//Si une méthode est appellée depuis un objet, this prendra comme valeur l'objet,
//On peut appeller une méthode en changeant la valeur de this gràce à la méthode call().