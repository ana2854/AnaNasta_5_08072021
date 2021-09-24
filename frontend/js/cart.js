let dataSaved = JSON.parse(localStorage.getItem("panier"));

// Si le local storage n'est pas vide alors afficher les produits choisis dans le panier + afficher le prix total + valider le formulaire +compter le nombre d'articles + retrouver l'id

if (dataSaved) {
  // Récupération des données issues des fonctions suivantes
  affichageProduitsChoisis();
  affichagePrixTotal();
  validationFormulaire();
  NbArticle();
  retrieveIdProduct();
} else {
  //Aucune données enregistrées
  aucunProduit();
  console.log("pas de produit dans le panier");
}

function aucunProduit() {
  let idEmpty = document.getElementById("cart-empty");
  let paragrapheEmpty = document.createElement("p");
  paragrapheEmpty.className = "aucun-produit";
  idEmpty.appendChild(paragrapheEmpty);
  paragrapheEmpty.innerHTML = "Votre panier est vide";
  console.log(paragrapheEmpty);
}

function retrieveIdProduct() {
  let dataSaved = JSON.parse(localStorage.getItem("panier"));
  let products = [];

  for (let i = 0; i < dataSaved.length; i++) {
    let productsId = dataSaved[i]._id;

    products.push(productsId);
    console.log(productsId);
  }
  return products;
}

function affichageProduitsChoisis() {
  let dataSaved = JSON.parse(localStorage.getItem("panier"));

  for (let i = 0; i < dataSaved.length; i++) {
    let cartProducts = document.getElementById("cart-products");
    console.log(cartProducts);
    let div = document.createElement("div");
    div.className = "ours panier";
    cartProducts.appendChild(div);

    let chosenProducts = "";

    chosenProducts += `
              <img id="${dataSaved[i]._id}" src="${dataSaved[i].imageUrl}"/>
              <p> Nom : ${dataSaved[i].name}
              </p>

              <p> Prix : ${dataSaved[i].price} €  </p>
                `;

    div.innerHTML = chosenProducts;
  }
}
// FONCTION POUR LE PRIX TOTAL
function affichagePrixTotal() {
  let dataSaved = JSON.parse(localStorage.getItem("panier"));

  let idPrixTotal = document.getElementById("total-price");
  let divPrixTotal = document.createElement("div");
  divPrixTotal.className = "total-price-child";
  idPrixTotal.appendChild(divPrixTotal);

  let prixTotal = 0;
  dataSaved.forEach((item) => {
    prixTotal += item.price;

    console.log(prixTotal);
  });

  content = "";

  content += `<p class="productsTotalPrice">Prix Total : ${prixTotal}€</p>`;

  divPrixTotal.innerHTML = content;
}

function NbArticle() {
  let dataSaved = JSON.parse(localStorage.getItem("panier"));

  let idNumber = document.getElementById("number-of-products");
  let divQuantity = document.createElement("div");
  divQuantity.className = "quantité-de-produit";
  idNumber.appendChild(divQuantity);

  let numberOfProduct = dataSaved.length;
  for (let i = 0; i < dataSaved.length; i++) {
    let quantity = "";
    quantity += `<p>Vous avez ${numberOfProduct} d'articles dans votre panier </p>`;

    divQuantity.innerHTML = quantity;
  }
}

function validationFormulaire() {
  //selection balise small du formulaire
  let smallMail = document.getElementById("errorEmail");
  let smallLastName = document.getElementById("errorLastName");
  let smallFirstName = document.getElementById("errorFirstName");
  let smallCity = document.getElementById("errorCity");
  let smallAddress = document.getElementById("errorAddress");

  //bouton commander
  let btnCommander = document.getElementById("btn-commander");

  //input du formulaire
  let input = document.getElementsByTagName("input").value;

  // ADD EVENT LISTENER sur bouton commander du formulaire
  btnCommander.addEventListener("click", function (e) {
    // Formulaire REGEX PRENOM

    const firstnameValue = document.getElementById("firstname").value;
    e.preventDefault();

    let regexPrenomNomVille = /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/;

    if (regexPrenomNomVille.test(firstnameValue)) {
      smallFirstName.innerHTML = "Prénom valide";
      smallFirstName.classList.remove("error");
      smallFirstName.classList.add("ok");
    } else {
      smallFirstName.innerHTML = "Le prénom n'est pas valide";
      smallFirstName.classList.remove("ok");
      smallFirstName.classList.add("error");
    }

    // Formualaire REGEX NOM DE FAMILLE

    const lastnameValue = document.getElementById("lastname").value;
    e.preventDefault();

    if (regexPrenomNomVille.test(lastnameValue)) {
      smallLastName.innerHTML = "Nom valide";
      smallLastName.classList.remove("error");
      smallLastName.classList.add("ok");
    } else {
      smallLastName.innerHTML = "Le nom n'est pas valide";
      smallLastName.classList.remove("ok");
      smallLastName.classList.add("error");
    }

    // Formulaire REGEX ADRESSE

    const addressValue = document.getElementById("address").value;
    e.preventDefault();

    let regexAdresse = /\d+[ ](?:[A-Za-z0-9.-]+[ ]?)+/;

    if (regexAdresse.test(addressValue)) {
      smallAddress.innerHTML = "Adresse valide";
      smallAddress.classList.remove("error");
      smallAddress.classList.add("ok");
    } else {
      smallAddress.innerHTML = "Adresse non valide";
      smallAddress.classList.remove("ok");
      smallAddress.classList.add("error");
    }

    //Formulaire REGEX VILLE

    const cityValue = document.getElementById("city").value;
    e.preventDefault();

    if (regexPrenomNomVille.test(cityValue)) {
      smallCity.innerHTML = "Ville valide";
      smallCity.classList.remove("error");
      smallCity.classList.add("ok");
    } else {
      smallCity.innerHTML = "Ville non valide";
      smallCity.classList.remove("ok");
      smallCity.classList.add("error");
    }

    //Formulaire REGEX EMAIL
    const emailValue = document.getElementById("email").value;
    e.preventDefault();

    let regxMail =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (regxMail.test(emailValue)) {
      smallMail.innerHTML = "Adresse mail valide";
      smallMail.classList.remove("error");
      smallMail.classList.add("ok");
    } else {
      smallMail.innerHTML = "Adresse mail non valide";
      smallMail.classList.remove("ok");
      smallMail.classList.add("error");
    }

    //FIN REGEX

    // Création de variables contenant la méthode test qui vérifie les regex
    let regexTestFirstName = regexPrenomNomVille.test(firstnameValue);
    let regexTestLastName = regexPrenomNomVille.test(lastnameValue);
    let regexTestAddress = regexAdresse.test(addressValue);
    let regexTestCity = regexPrenomNomVille.test(cityValue);
    let regexTestMail = regxMail.test(emailValue);

    //Condition : Si la valeur des inputs du formulaire est égale aux regex -variable ci-dessus - et s'ils ne sont pas vides ....
    if (
      regexTestFirstName &&
      firstnameValue != "" &&
      regexTestLastName &&
      lastnameValue != "" &&
      regexTestAddress &&
      addressValue != "" &&
      regexTestCity &&
      cityValue != "" &&
      regexTestMail &&
      emailValue != ""
    ) {
      //... alors envoyer les infomations de contact du formulaire + ID des produits au serveur

      //Selection de l'ensemble du formulaire dans la variable formbox
      let formbox = document.getElementById("formbox");

      //Ajout d'un 2ème ADD EVENT LISTENER SUR le BOUTON COMMANDER -> RECUPERATION DES DONNNES DU FORMULAIRE
      formbox.addEventListener("submit", (e) => {
        e.preventDefault();
      });

      //Objet Contact
      const contact = {
        firstName: document.getElementById("firstname").value,
        lastName: document.getElementById("lastname").value,
        address: document.getElementById("address").value,
        city: document.getElementById("city").value,
        email: document.getElementById("email").value,
      };

      //Objet Info Commande
      let infosCommande = {
        contact: contact,
        products: retrieveIdProduct(),
      };

      let url = "http://localhost:3000/api/teddies/order";

      //Options de la requête
      let options = {
        //type de méthode , ici post
        method: "POST",
        //en-tête de la requête
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        //création d'un objet json à envoyer
        body: JSON.stringify(infosCommande),
      };

      fetch(url, options)
        //conversion en json
        .then((response) => response.json())
        .then((json) => {
          function getInfosCommande() {
            //Sauvergarde username
            let userName = infosCommande.contact.lastName;
            localStorage.setItem("nom", userName);
            console.log(userName);

            //Sauvegarde orderID
            let orderId = json.orderId;
            localStorage.setItem("idCommande", orderId);
          }

          //Appel fonction getinfosCommande
          getInfosCommande();

          //Redirection vers la page de confirmation
          window.location.pathname = window.location.pathname.replace(
            "cart.html",
            "confirmation.html"
          );
        })

        //Gestion de possibles erreur
        .catch((error) => console.error(error));
    } else {
      console.log("Données du formulaire invalides");
    }
  });
}
