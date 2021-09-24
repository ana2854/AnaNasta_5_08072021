
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

let contentConfirmDiv = document.createElement("div");
contentConfirmDiv.className = "content-order";

confirmMsg.appendChild(contentConfirmDiv)

content = '';

content += `

<p class="confirmation">Merci pour votre achat ${userName}!</p>

<p class="confirmation">Prix total de votre commande: ${prixTotal}€</p>

<p class="confirmation">Votre identifiant de commande est le : ${userOrderId}</p>
`

contentConfirmDiv.innerHTML = content;

}
