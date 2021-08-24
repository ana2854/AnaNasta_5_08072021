
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
            
                <button class="btn minus-btn disabled" type="button">-</button>

                <input type="text" id="quantity" value="1">

                <button class="btn plus-btn" type="button">+</button>

            </div>
    </div> 

    <div class="btn-ajout-panier">
            <button class="ajout-produit" type="button">Ajouter au panier</button>

    </div>`;

divOursInfo.innerHTML = content;


   
//bouton moins réglage 
let a = document.getElementsByClassName('.minus-btn').textContent;
console.log(a) /*.setAttribute('disabled', 'disabled');

//valeur qui va augmenter ou diminuer 
   let valueCount = '';

//fonction calcul prix total 
    function priceTotal () {
        let total = valueCount * price;
        document.getElementsByClassName('.prix-produit')[0].innerText = total;
    }

//bouton ajout produit 

    document.getElementsByClassName(".plus-btn")[0].addEventListener('click', function() {
    valueCount = document.getElementById('quantity')[0].value;
    valueCount ++;

    document.getElementById('quantity')[0].value = valueCount;

    if (valueCount > 1 ) {
        document.getElementsByClassName('.minus-btn')[0].removeAttribute('disabled');
        document.getElementsByClassName('.minus-btn')[0].classList.remove('disabled')
    }
    priceTotal();
    })
   
*/
}









