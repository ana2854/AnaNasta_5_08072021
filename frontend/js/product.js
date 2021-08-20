
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
    document.getElementById('produit').innerHTML += `
    <p>j'ajoute un paragraphe pour voir si on le voit dans la console</p>
    `}