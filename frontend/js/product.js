
AfficherUnProduit()

//J'utilise la fonction getArticle pour récupérer mes articles
function getArticles() {
    let id = window.location.search.slice(4)
    console.log(id)
    return fetch(`http://localhost:3000/api/teddies/${id}`)
    // return fetch("http://localhost:3000/teddies/id du produit")
      .then(function (response) {
       return response.json()
      })
      .catch(function (error) {
        alert(error)
      })
}


//Affichage de l'ensemble de mes produits 
async function AfficherUnProduit() {

    const produit = await getArticles()
  
    let divOursInfo = document.querySelector('#produit .ours.info')

    let contentOurs = '';

    contentOurs += 

    //Récupération de mes données dans la page produit 
    "<img" +
            " id="+ produit._id +
            " src=" + produit.imageUrl + 
            ">";
    
    contentOurs+= `
    <p> Nom :   ${produit.name}  </p>
    
    <p> Description :  ${produit.description} </p>

    <select class="select">
        <option selected disabled>Choisissez une couleur</option>
    
        <option value="couleur tan">Brun clair</option>
        <option value="couleur chocolat">Chocolat</option>
        <option value="couleur noir">Noir</option>
        <option value="couleur blanc">Blanc</option>

    </select>
    
    <div class="prix-total">
            <p class="prix-produit"> Prix : ${produit.price} €  </p>
    </div>
    <div class="quantity">
            <div class="btn-quantite">

                <span>Quantité</span>
            
                <button class="btn minus-btn disabled" id="a" type="button">-</button>

                <input type="text" id="quantity" value="1">

                <button class="btn plus-btn" type="button">+</button>

            </div>
    </div> 

    <div class="container"></div>

    <div class="btn-ajout-panier">
            <button class="ajout-produit" type="button">Ajouter au panier</button>

    </div>
    

    `;

divOursInfo.innerHTML = contentOurs;

/*

if(typeof(Storage) !== 'undefined') {
    console.log('storage is working')
}else {
    console.log('storage not working')
}

*/

/*

//convertion d'un objet js en chaine de caractère json
const objString = JSON.stringify(produit);
//on reconvertit la chaine de caractère en objet js
const parsedString = JSON.parse(objString)
console.log(parsedString)
console.log(typeof(parsedString))
}*/

// ADD EVENT LISTENER sur le bouton ajout-produit pour ajouter des produits au panier
document.getElementsByClassName('ajout-produit')[0].addEventListener('click', function (add){
    add.preventDefault() 

     //convertion d'un objet en string pour les sauvegarder dans mon local storage
   
     /*localStorage.setItem("panier", contenu);*/
   /* console.log(contenu)*/
    /*console.log(`La variable contenu est de type `,typeof (contenu))

   /* const dataSaved = JSON.parse(localStorage.getItem("panier"))*/
 
    /*console.log(`La variable dataSaved est de type`, typeof(dataSaved))
    /*console.log(dataSaved)*/

    //Données sauvegardées dans mon local storage
   let dataSaved = localStorage.getItem("panier");
  

   //initialisation de mon panier : clé intitulé panier ainsi que son contenu 
    if (dataSaved=== null) {
        let cart = [];
        cart.push(produit)
        localStorage.setItem("panier", JSON.stringify(cart));

    }else {
      
        let cart = JSON.parse(dataSaved);
        cart.push(produit);
        localStorage.setItem("panier", JSON.stringify(cart));
    }


    
      document.getElementsByClassName("ajout-produit")[0].addEventListener("click",(e) => {
        e.preventDefault();
        notifAjoutProduit()
    });

    function notifAjoutProduit() {
        let notif = document.createElement("p")[0];
       let container = document.getElementsByClassName("container")
        container.appendChild(notif);
        notif.classList.add("notif-ajout-produit")
        notif.innerHTML ="Vous avez ajouté un produit dans le panier";

        setTimeout(() => {
            notif.remove()
        }, 3000);
    } ;

    


}) 
}

    



/*
    
    */









   /*
//bouton moins réglage 
let a = document.getElementsByClassName('.minus-btn').setAttribute('disabled', 'disabled');

//valeur qui va augmenter ou diminuer 
   let valueCount = '';

//fonction qui calcule le prix total 
    function priceTotal () {
        let total = valueCount * price;
        document.getElementsByClassName('.prix-produit').innerText = total;
    }

//bouton ajout produit 

    document.getElementsByClassName(".plus-btn").addEventListener('click', function() {
    valueCount = document.getElementById('quantity').value;
    valueCount ++;

    document.getElementById('quantity').value = valueCount;

    if (valueCount > 1 ) {
        document.getElementsByClassName('.minus-btn').removeAttribute('disabled');
        document.getElementsByClassName('.minus-btn').classList.remove('disabled')
    }
    priceTotal();
    })
   
*/

