

     // si le local storage n'est pas vide
       if (typeof(Storage) !== "undefined") {
       // récupère les datas 
       affichageProduitsChoisis()
       affichagePrixTotal()
       console.log ('ok')
        
        } else {
        document.getElementById("cart-empty").innerHTML = "Votre panier est vide";
        console.log('nope')
        }
      
        function affichageProduitsChoisis() {
   
      let dataSaved = JSON.parse(localStorage.getItem("panier"))
      let cartProducts = document.getElementById("cart-products")
    

          for (let i = 0 ; i < dataSaved.length; i++) {
             
              let div = document.createElement('div');
              div.className = "ours panier";
              cartProducts.appendChild(div);

              let content = '';

              content +=  

              `
              <img id="${dataSaved[i]._id}" src="${dataSaved[i].imageUrl}"/>
              <p> Nom : ${(dataSaved[i].name)}
              </p>

              <p> Prix : ${dataSaved[i].price} €  </p>
              <p> Description :  ${dataSaved[i].description} </p>
                
                `;

            div.innerHTML = content;

          }
        }

        function affichagePrixTotal () {
            let prixTotal = document.getElementById("total-price")
            let divPrixTotal = document.createElement("div");
            divPrixTotal.className = "total-price-child";

            let dataSaved = JSON.parse(localStorage.getItem("panier"))

            prixTotal.appendChild(divPrixTotal);

            total = 0;
            dataSaved.forEach(item => {
              total += item.price
            })

            content = '';

            content += 
            `<p>Prix Total : ${total}€</p>
            
            <form action="/" method="GET">
            
              <label for="firstName">
              First Name
              <input id="firstName" name="firstName" type="text" required></label>

              <label for="lastName">
              Last Name
              <input id="lastName" name="lastName" type="text">
              </label>

              <label for="Adress">
              Adresse
              <input id="adress" name="adress" type="text">
              </label>
              

              <label for="City">
              Ville
              <input id="city" name="city" type="text">
              </label>
            

              <label for="email_adress">Email
              <input type="email" name="email" id="email-adress" autocomplete="email" value title="e-mail" class="input-text">

            
            </label>
            
            
            
            
            
            </form>



            <button id="btn-commander">Commander</button>
            
            `;

            divPrixTotal.innerHTML = content;


        }


      
