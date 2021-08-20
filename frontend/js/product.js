
/*
function getProduit () {
    const params = new URLSearchParams(window.location.search);

    console.log(params);

}


const queryString = 'id=5beaaa8f1c9d440000a57d95';

const a = new URLSearchParams(queryString)

const idProduct = a.get('id')

console.log(`Value for 'id' is : ${idProduct}`)



for (const [key, value] of a) {
    console.log(`${key} => ${value}`)
}

*/

/*
const queryString_url_id = window.location.search;
console.log(queryString_url_id);

const URLSearchParams = new URLSearchParams(queryString_url_id);
console.log(URLSearchParams);

const id = URLSearchParams.get('id');
console.log(id);

let response = await fetch('http://localhost:3000/api/teddies/id=5be9c8541c9d440000665243');




fetch('http://localhost:3000/api/teddies/5be9c8541c9d440000665243').then(response=>response.json()).then (response2 =>console.table(response2))



function getProduitById (id) {
    let idProduct = await fetch ('http://localhost:3000/api/teddies'+ id );
    console.log(idProduct);
}*/





AfficherUnProduit()

function getArticles() {
    let id = window.location.search.slice(4)
    console.log(id)
    return fetch(`http://localhost:3000/api/teddies/${id}`)
    // return fetch("http://localhost:3000/teddies/cameras")
      .then(function (httpBodyResponse) {
       return httpBodyResponse.json()
      })
      .then(function (idActual) {
        return idActual
      })
      .catch(function (error) {
        alert(error)
      })
}

async function AfficherUnProduit() {
    const idActual = await getArticles()
    console.log(idActual)
    let divOursInfo = document.querySelector('#produit .ours.info')

    let content = '';


    content += 

    "<img" +
            " id="+ idActual._id +
            " src=" + idActual.imageUrl + 
            ">";
    
    content+= `

    
    <p> Nom :   ${idActual.name}  </p>
    <p> Prix : ${idActual.price} €  </p>
    <p> Description :  ${idActual.description} </p>
     
    <p>Sélectionner une couleur</p>
    <select class="select">
            <option selected disabled>Choisissez une couleur</option>
            <option value="couleur tan">Brun clair</option>
            <option value="couleur chocolat">Chocolat</option>
            <option value="couleur noir">Noir</option>
            <option value="couleur blanc">Blanc</option>
        
    
    </select>

    <p>Sélectionner la quantité </p>


    <div class="quantite">  <input type="number" name= "quantity" id="quantity" value="1"></div>


<button class="btn-ajout-produit" type="button">Ajouter au panier</button>`;

divOursInfo.innerHTML = content

}