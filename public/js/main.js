// - # 1°
// - ## Supprimer le dernier élément de l'array
let monTab = ['pomme', 'fraise', 'melon', 'citron']
monTab.pop();


// - ## Supprimer le premier élément de l'array
monTab.shift();

// - ## Ajouter un élément a la fin de l'array
monTab.push("element");

// - ## Ajouter un élément au debut de l'array
monTab.unshift("element2");

// - ## Mettre le deuxième élément en majuscule 
secondElement = monTab[1].toUpperCase();

// - ## Changer l'ordre de l'array
monTab.reverse();

// - # 2°
// - ## Ordonner les chiffres
let chiffres = [4, 5, 2, 1, 3]

// - ## Première methode (Ordonner)
// - ## 1, 2, 3, 4, 5
console.log(chiffres.sort());


// - ## Deuxième methode (Concatenation)
// - ## 1-2-3-4-5


// - ## Utiliser une méthode qui permet de revenir la chaine de caractères en un tableau


// - ## Afficher l'array avec les chiffres ordonnées


// - # 3°
// - ## Créez un tableau vide
var valentin = []


// - ## Ajouez 10 élément dans votre array
valentin.push(1,2,3,4,5,6,7,8,9,10);

// - ## Affichez le contenu de l'array et sa taille
console.log(valentin);
console.log(valentin.length);

// - ## Touvez l'index de chaque éléments


let valentine = ['objet 1', 'objet 2', 'objet 3', 'objet 4', 'objet 5']
console.log(valentine.indexOf('objet 1'));
console.log(valentine.indexOf('objet 2'));
console.log(valentine.indexOf('objet 3'));
console.log(valentine.indexOf('objet 4'));
console.log(valentine.indexOf('objet 5'));

// - ## Utiliser une methode qui permet de supprimer un element grâce à l'index

valentine.splice(4);
console.log(valentine);