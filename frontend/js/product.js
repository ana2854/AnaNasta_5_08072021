AfficherUnProduit();

//J'utilise la fonction getArticle pour récupérer mes articles
function getArticles() {
  let id = window.location.search.slice(4);
  console.log(id);
  return (
    fetch(`http://localhost:3000/api/teddies/${id}`)
      // return fetch("http://localhost:3000/teddies/id du produit")
      .then(function (response) {
        return response.json();
      })
      .catch(function (error) {
        alert(error);
      })
  );
}

//Affichage de l'ensemble de mes produits
async function AfficherUnProduit() {
  const produit = await getArticles();

  let divOursInfo = document.querySelector("#produit .ours.info");

  let contentOurs = "";

  contentOurs +=
    //Récupération de mes données dans la page produit
    "<img" + " id=" + produit._id + " src=" + produit.imageUrl + ">";

  contentOurs += `
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
   

    <div class="container"></div>

    <div class="btn-ajout-panier">
            <button class="ajout-produit" type="button">Ajouter au panier</button>
    </div> `;

  divOursInfo.innerHTML = contentOurs;

  // ADD EVENT LISTENER sur le bouton ajout-produit pour ajouter des produits au panier
  document
    .getElementsByClassName("ajout-produit")[0]
    .addEventListener("click", function (add) {
      add.preventDefault();

      //Données sauvegardées dans mon local storage
      let dataSaved = localStorage.getItem("panier");

      //initialisation de mon panier : clé intitulé panier ainsi que son contenu
      if (dataSaved === null) {
        let cart = [];
        cart.push(produit);
        localStorage.setItem("panier", JSON.stringify(cart));
      } else {
        let cart = JSON.parse(dataSaved);
        cart.push(produit);
        localStorage.setItem("panier", JSON.stringify(cart));
      }

      document
        .getElementsByClassName("ajout-produit")[0]
        .addEventListener("click", (e) => {
          e.preventDefault();
          notifAjoutProduit();
          console.log(notifAjoutProduit);
        });

      function notifAjoutProduit() {
        let notif = document.createElement("p");
        let container = document.getElementsByClassName("container");
        container.appendChild(notif);
        notif.classList("notif-ajout-produit");
        notif.innerHTML = "Vous avez ajouté un produit dans le panier";

        setTimeout(() => {
          notif.remove();
        }, 3000);

        return notif;
      }
    });
}
