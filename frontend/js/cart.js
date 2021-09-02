

     // si le local storage n'est pas vide
       if (typeof(Storage) !== "undefined") {
       // récupère les datas 
       affichageProduitsChoisis()
       affichagePrixTotal()
       formulaire()
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
            
            `;

            divPrixTotal.innerHTML = content;


        }


        function formulaire () {

          const firstName = document.getElementById("firstName");
          const lastName = document.getElementById("lastName");
          const adress = document.getElementById("adress");
          const city = document.getElementById("city");
          const email = document.getElementById("email");
          
          
          let form = document.getElementById("form");

          content = '';

          content += 
          ` 
          <form action="" method="POST" id="formbox">
          <p>Remplissez le formulaire</p>

            <div class="form_item">
              <label for="firstName">
              Prénom
              <input id="firstName" name="firstName" type="text" placeholder="Prénom" required>
              </label>
              <small> </small>
            </div>

            <div class="form_item">
              <label for="lastName">
              Nom de famille
              <input id="lastName" name="lastName" type="text" placeholder="Nom de Famille">
              </label>
              <small ></small>
            </div>

            <div class="form_item">
              <label for="adress">
              Adresse
              <input id="adress" name="adress" type="text" placeholder="Adresse">
              </label>
              <small></small>
            </div>

            <div class="form_item">
              <label for="city">
              Ville
              <input id="city" name="city" type="text" placeholder="Ville">
              </label>
              <small></small>
            </div>

            <div class="form_item">       
            <label for="email">
            Email
            <input type="email" name="email" id="email" autocomplete="email" type="email" placeholder="e-mail" >
            </label>
            <small></small>

            </div>
          
           </form>
    
          <div class="commander">
          <button id="btn-commander">Commander</button>
          </div>
         
          `;

          form.innerHTML = content;
        

         let formbox = document.getElementById("formbox")

         //on écoute la case input est modifié et on lui indique quoi faire
         formbox.email.addEventListener("change", function () {
           validEmail(this)
         });
        

        const validEmail = function (inputEmail) {
          //creation de la regex exp pour validation email
          let emailRegExp = new RegExp ('
          ^[a-zA-Z0-9.-_]+[@]{1}[a-zA-z0-9-_]+[.]{1}[a-z]{2,10}$
          ', 'g'
          );

        let testEmail = emailRegEx.test(inputEmail.value)
      
          );

      let testEmail = email.RegExp.test(inputEmail.value);

        }