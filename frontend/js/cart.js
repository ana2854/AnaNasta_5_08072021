

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

          let form = document.getElementById("form");

          content = '';

          content += 
          ` 
          <form id="formbox" name="formbox" action="/" method="GET" >
          <p>Remplissez le formulaire</p>

            <div class="form_item">
              <label for="firstname">
              Prénom
              <input id="firstname" name="firstname" type="text" placeholder="Prénom" required>
              </label>
              <small> </small>
            </div>

            <div class="form_item">
              <label for="lastname">
              Nom de famille
              <input id="lastname" name="lastname" type="text" placeholder="Nom de Famille">
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
            <input id="email" type="email" name="email" type="email" placeholder="e-mail" >
            <small></small>
            </label>
            </div>

            
            <div class="commander">
              <button id="btn-commander" type="submit">Commander</button>
          </div>

           </form>

           <p class="error"</p>
          `;

          form.innerHTML = content;

        
         document.forms["formbox"].addEventListener("submit", function(e) {
           let erreur;

           let inputs = this;

           for (var i = 0; i < inputs.length; i++) {
             console.log(inputs[i]);
             if (!inputs[i].value) {
               erreur = "veuillez renseignez tous les champs"
             }
           }

           if (erreur) {
             e.preventDefault();
             document.getElementsByClassName("error").innerHTML=erreur;
             return false
           } else {
             alert('formulaire envoyé');
           }
         })
       
      

          /*selection des input du formulaire
         const firstname = document.getElementById("firstname");
         const lastname = document.getElementById("lastname");
         const adress = document.getElementById("adress");
         const city = document.getElementById("city");
         
         let small = document.getElementsByTagName("small")

       
          let email = document.getElementById("email").value;


          


          /*

          email.addEventListener("change", function() {

          let regx = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-z0-9.-_]+[.]{1}[a-z]{2,10}$'/

          if(regx.text(email)) {
            small.innerHTML = "Adresse mail valide";
            small.classList.remove("error");
            small.classList.add("ok")
      } else {
          small.innerHTML = "Adresse mail non valide";
          small.classList.remove("ok");
          small.classList.add("error");
        }
          })
        }
      
         /*
         console.log(email)
          console.log(lastname)

         formbox.addEventListener("submit", function(e){
           e.preventDefault();
           let messages = []
           if (adress.value === null ) {
             messages.push('name is required')}
           }
         )}

*/



/*
         //on écoute la case input est modifié et on lui indique quoi faire
         formbox.email.addEventListener("onInput", function () {
           validEmail(this);
         });

         console.log(formbox.email)
        

        const validEmail = function(inputEmail) {
          //creation de la regex exp pour validation email
          let emailRegExp = new RegExp ('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g');
        };

        //récupération de la balise small
        let small = inputEmail.nextElementSibling;
        
        console.log(small)

      
      //test de l'expression régulière
          if(emailRegExp.test(inputEmail.value)) {
              small.innerHTML = "Adresse mail valide";
              small.classList.remove("error");
              small.classList.add("ok")
        } else {
            small.innerHTML = "Adresse mail non valide";
            small.classList.remove("ok");
            small.classList.add("error");
          }
        }
          
        */

        }