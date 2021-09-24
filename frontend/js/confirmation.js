
getInfosCommande()

async function getInfosCommande () {
//Récupération des données dans le local storage
let contenuPanier = JSON.parse(localStorage.getItem("panier"));

let userName = localStorage.getItem("nom");

let userOrderId = localStorage.getItem("idCommande");

let prixTotal = 0;
contenuPanier.forEach(item => {
prixTotal += item.price;
})

//Affichage message de confirmation
let confirmMsg = document.getElementsByClassName("orderConfirmation")[0];

console.log(confirmMsg)



contentConfirmMsg = '';

contentConfirmMsg += `

<p>Merci pour votre achat ${userName}!</p>

<p>Prix Total : ${prixTotal}€</p>

<p>Votre identifiant de commande est : ${userOrderId}</p>


`

confirmMsg.innerHTML = contentConfirmMsg;

}
