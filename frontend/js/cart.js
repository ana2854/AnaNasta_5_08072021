

     // Si le local storage n'est pas vide alors afficher les produits choisis dans le panier + afficher le prix total + valider le formulaire
       if (typeof(Storage) !== "undefined" && typeof(Storage) !== null) {
       // récupère les datas 
       affichageProduitsChoisis()
       affichagePrixTotal()
       validationFormulaire()
       NbArticle()
       retrieveIdProduct()

        } else {
          aucunProduit();
        }

        function aucunProduit() {
           let empty = document.getElementById("cart-empty")[0]
           empty.innerHTML = "Votre panier est vide";
            console.log(empty)
        }

        function retrieveIdProduct () {
          let dataSaved = JSON.parse(localStorage.getItem("panier"));

          for (let i = 0 ; i < dataSaved.length; i++) {
              let products = [];
              let productsId = JSON.stringify(dataSaved[i]._id)
              products.push(productsId)
              console.log(productsId)
              
          }
        }

       
       
      
        function affichageProduitsChoisis() {
             let dataSaved = JSON.parse(localStorage.getItem("panier"));

          for (let i = 0 ; i < dataSaved.length; i++) {
            
           let cartProducts = document.getElementById("cart-products");
           console.log(cartProducts)
              let div = document.createElement('div');
              div.className = "ours panier";
              cartProducts.appendChild(div);

              let chosenProducts = '';

              chosenProducts +=  

              `
              <img id="${dataSaved[i]._id}" src="${dataSaved[i].imageUrl}"/>
              <p> Nom : ${(dataSaved[i].name)}
              </p>

              <p> Prix : ${dataSaved[i].price} €  </p>
            
                
                `;

            div.innerHTML = chosenProducts;

          }
        }

        // FONCTION POUR LE PRIX TOTAL
        function affichagePrixTotal () {


            let dataSaved = JSON.parse(localStorage.getItem("panier"))

            let idPrixTotal = document.getElementById("total-price")
            let divPrixTotal = document.createElement("div");
            divPrixTotal.className = "total-price-child";
            idPrixTotal.appendChild(divPrixTotal);

            let prixTotal = 0;
            dataSaved.forEach(item => {
            prixTotal += item.price
            })

            content = '';

            content += 
            `<p>Prix Total : ${prixTotal}€</p>`;

            divPrixTotal.innerHTML = content;
          
          }
          
            
            function NbArticle () {

              let dataSaved = JSON.parse(localStorage.getItem("panier"))

            let idNumber  = document.getElementById("number-of-products");
            let divQuantity = document.createElement("div");
            divQuantity.className="quantité-de-produit";
            idNumber.appendChild(divQuantity);

              let numberOfProduct = dataSaved.length;
              for (let i = 0; i<dataSaved.length; i++){
           
            let quantity ='';
            quantity += `<p>Nombre d'articles : ${numberOfProduct} </p>`

           divQuantity.innerHTML = quantity;
              }
            }

          
        function validationFormulaire () {
        //selection balise small du formulaire
         let smallMail = document.getElementById("errorEmail")
         let smallLastName = document.getElementById("errorLastName")
         let smallFirstName = document.getElementById("errorFirstName")
         let smallCity = document.getElementById("errorCity")
         let smallAddress = document.getElementById("errorAddress")
         
         //bouton commander
         let btnCommander = document.getElementById("btn-commander")
        
         //input du formulaire
         let input = document.getElementsByTagName("input").value

      
        // ADD EVENT LISTENER sur bouton commander du formulaire
        btnCommander.addEventListener('click', function(e) {
        

        // Formulaire REGEX PRENOM

       const firstnameValue = document.getElementById("firstname").value;
       e.preventDefault();

       let regexPrenomNomVille =  /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/

       if(regexPrenomNomVille.test(firstnameValue)) {
         smallFirstName.innerHTML = "Prénom valide";
         smallFirstName.classList.remove("error");
         smallFirstName.classList.add("ok")
       }else {
        smallFirstName.innerHTML = "Le prénom n'est pas valide";
        smallFirstName.classList.remove("ok");
        smallFirstName.classList.add("error");
     }

       // Formualaire REGEX NOM DE FAMILLE 

       const lastnameValue = document.getElementById("lastname").value;
       e.preventDefault();
      

       if(regexPrenomNomVille.test(lastnameValue)) {
         smallLastName.innerHTML = "Nom valide";
         smallLastName.classList.remove("error");
         smallLastName.classList.add("ok")
       }else {
       smallLastName.innerHTML = "Le nom n'est pas valide";
       smallLastName.classList.remove("ok");
       smallLastName.classList.add("error");
     }

       // Formulaire REGEX ADRESSE

       const addressValue = document.getElementById("address").value;
       e.preventDefault();

       let regexAdresse = /\d+[ ](?:[A-Za-z0-9.-]+[ ]?)+/
 
       if(regexAdresse.test(addressValue)) {
         smallAddress.innerHTML = "Adresse valide";
         smallAddress.classList.remove("error");
         smallAddress.classList.add("ok")
       }else {
         smallAddress.innerHTML = "Adresse non valide";
         smallAddress.classList.remove("ok");
         smallAddress.classList.add("error");
     }

      //Formulaire REGEX VILLE 

      const cityValue = document.getElementById("city").value;
      e.preventDefault();

      if(regexPrenomNomVille.test(cityValue)) {
      smallCity.innerHTML = "Ville valide";
      smallCity.classList.remove("error");
      smallCity.classList.add("ok")
      }else {
      smallCity.innerHTML = "Ville non valide";
      smallCity.classList.remove("ok");
      smallCity.classList.add("error");
}


     //Formulaire REGEX EMAIL  
        const emailValue = document.getElementById("email").value;
        e.preventDefault();
    
        
        let regxMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if(regxMail.test(emailValue)) {
          smallMail.innerHTML = "Adresse mail valide";
          smallMail.classList.remove("error");
          smallMail.classList.add("ok")
        } else {
        smallMail.innerHTML = "Adresse mail non valide";
        smallMail.classList.remove("ok");
        smallMail.classList.add("error");
        }

        //FIN REGEX
        
    // Création de variables contenant la méthode test qui vérifie les regex
    let regexTestFirstName = regexPrenomNomVille.test(firstnameValue)
    let regexTestLastName = regexPrenomNomVille.test(lastnameValue)
    let regexTestAddress = regexAdresse.test(addressValue)
    let regexTestCity = regexPrenomNomVille.test(cityValue)
    let regexTestMail = regxMail.test(emailValue)

    //Condition : Si la valeur des inputs du formulaire sont égaux aux regex -variables ci-dessus - et s'ils ne sont pas vides ....
    if (

      (firstnameValue === regexTestFirstName && firstnameValue != "")
      &&
      (lastnameValue  === regexTestLastName && lastnameValue != "")
      &&
      (addressValue === regexTestAddress && addressValue !="")
      &&
      (cityValue === regexTestCity && cityValue != "")
      &&
      (emailValue === regexTestMail  && emailValue !="")

    ) {

      


      //... alors envoyer les infomations de contact au serveur

     //Selection de l'ensemble du formulaire dans la variable formbox
     let formbox = document.getElementById("formbox");
     console.log(formbox)

      //2ème ADD EVENT LISTENER SUR BOUTON COMMANDER -> RECUPERATION DES DONNNES DU FORMULAIRE
     formbox.addEventListener("submit", (e) => {
       e.preventDefault()

     })

    

    //Objet contact
     const contact = {
      firstname: document.getElementById("firstname").value,
      lastname: document.getElementById("lastname").value,
      address: document.getElementById("address").value,
      city: document.getElementById("city").value,
      email: document.getElementById("email").value
    };

  

    let url = 'http://localhost:3000/api/teddies/order';

  //Options de la requête
   let options = {
        //type de méthode , ici post
        method: "POST",
          //en-tête de la requête
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        //création d'un objet json à envoyer
        body : JSON.stringify({contact,productsId})

   }

   fetch(url, options)
         //conversion en json
        .then(response => response.json())
        .then(json=>console.log(json))
        .catch(error =>console.error(error))
    }


  
  })}

    
    
   
    

    

    



     /*

        let formbox = document.getElementById("formbox")

        formbox.addEventListener("submit", handleForm);
  });

        async function handleForm (e) {
          e.preventDefault(); //empêche la page de se recharger
          let myForm = ev.target;
          let formDataObjet = new FormData(myForm);

          //charge tout le contenu
          for (let key of formDataObjet.keys()) {
            console.log(key,formDataObjet.get(key))
          }

          let json = await convert2json(formDataObjet)

          let url = "http://localhost:3000/teddies";
          let req = new Request(url, {
            body: formDataObjet,
            method: "POST",
          });

          fetch(req)
          .then((res)) => res.json())
          .then((data)) => {
            console.log("response from the server")
          })
          .catch(console.warn)
          
      }
      */
