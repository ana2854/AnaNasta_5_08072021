
AfficherUnProduit()

function getArticles() {
    let id = window.location.search.slice(4)
    console.log(id)
    return fetch(`http://localhost:3000/api/teddies/${id}`)
    // return fetch("http://localhost:3000/teddies/id du produit")
      .then(function (response) {
       return response.json()
      })
    .then(function (idProduit) {
        return idProduit
      })
      .catch(function (error) {
        alert(error)
      })
}

async function AfficherUnProduit() {
    const idProduit = await getArticles()
    console.log(idProduit)
    let divOursInfo = document.querySelector('#produit .ours.info')

   
    /*Le prix est divisé par 100*/
    let originalPrice = idProduit.price;
    /*console.log(new Intl.NumberFormat('fr-FR',{style:'currency', currency:'EUR'}).format(price));*/
    let price = (originalPrice / 100).toFixed(2);
   console.log(price)
   console.log(typeof(price));

   


    let content = '';


    content += 

    "<img" +
            " id="+ idProduit._id +
            " src=" + idProduit.imageUrl + 
            ">";
    
    content+= `
    <p> Nom :   ${idProduit.name}  </p>
    
    <p> Description :  ${idProduit.description} </p>
    
    <div class="prix-total">
            <p class="prix-produit"> Prix : ${price} €  </p>
    </div>


    <div class="quantity">

            <div class="btn-quantite">

                <span>Quantité</span>
            
                <button class="btn minus-btn disabled" id="a" type="button">-</button>

                <input type="text" id="quantity" value="1">

                <button class="btn plus-btn" type="button">+</button>

            </div>
    </div> 

    <div class="btn-ajout-panier">
            <button class="ajout-produit" type="button">Ajouter au panier</button>

    </div>`;

divOursInfo.innerHTML = content;



document.getElementsByClassName('ajout-produit')[0].addEventListener('click', function() {
    let a = localStorage.getItem('panier');

    if (a === null) {
        let tableauVide = [];
        tableauVide.push(idProduit)
        localStorage.setItem('panier', tableauVide)
    } else { console.log(a)
        a.push(idProduit)
        localStorage.setItem('panier', a)
    }
   
})


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
}










