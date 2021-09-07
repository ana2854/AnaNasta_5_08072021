

     // si le local storage n'est pas vide alors afficher les produits choisis dans le panier
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

        // FONCTION POUR LE PRIX TOTAL
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

       
        //selection des input du formulaire
         const firstname = document.getElementById("firstname");
         const lastname = document.getElementById("lastname").value;
         const adress = document.getElementById("adress");
         const city = document.getElementById("city");
         let formbox = document.getElementById('formbox')


         let smallMail = document.getElementById("errorEmail")
         let smallLastName = document.getElementById("errorLastName")
         let smallFirstName = document.getElementById("errorFirstName")
         let smallCity = document.getElementById("errorCity")
         let smallAdress = document.getElementById("errorAdress")
         
         let msgError = document.getElementsByClassName("error")
         let btnCommander = document.getElementById("btn-commander")
        
         let input = document.getElementsByTagName("input")

       

        // ADD EVENT LISTENER sur bouton commander
        btnCommander.addEventListener('click', function(e) {
          
        let email = document.getElementById("email").value;
        e.preventDefault();
        console.log(email)
        
        //REGEX EMAIL 
        let regxMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if(regxMail.test(email)) {
          smallMail.innerHTML = "Adresse mail valide";
          smallMail.classList.remove("error");
          smallMail.classList.add("ok")
        } else {
        smallMail.innerHTML = "Adresse mail non valide";
        smallMail.classList.remove("ok");
        smallMail.classList.add("error");
        }
        
        // REGEX NOM DE FAMILLE 
        let regexPrenomNomVille = /^[a-zA-Z]+ [a-zA-Z]+$/

        if(regexPrenomNomVille.test(lastname)) {
          smallLastName.innerHTML = "Nom valide";
          smallLastName.classList.remove("error");
          smallLastName.classList.add("ok")
        }else {
        smallLastName.innerHTML = "Le nom n'est pas valide";
        smallLastName.classList.remove("ok");
        smallLastName.classList.add("error");
      }

       // REGEX PRENOM
       if(regexPrenomNomVille.test(firstname)) {
         smallFirstName.innerHTML = "Prénom valide";
         smallFirstName.classList.remove("error");
         smallFirstName.classList.add("ok")
       }else {
       smallFirstName.innerHTML = "Le prénom n'est pas valide";
       smallFirstName.classList.remove("ok");
       smallFirstName.classList.add("error");
     }

     //REGEX VILLE 

     if(regexPrenomNomVille.test(city)) {
      smallCity.innerHTML = "Ville valide";
      smallCity.classList.remove("error");
      smallCity.classList.add("ok")
    }else {
    smallCity.innerHTML = "Ville non valide";
    smallCity.classList.remove("ok");
    smallCity.classList.add("error");
  }

  //REGEX ADRESSE 

  let regexAdresse = /^[A-Za-z09]{5.50}$/;

  if(regexAdresse.test(adress)) {
    smallAdress.innerHTML = "Adresse valide";
    smallAdress.classList.remove("error");
    smallAdress.classList.add("ok")
  }else {
  smallAdress.innerHTML = "Adresse non valide";
  smallAdress.classList.remove("ok");
  smallAdress.classList.add("error");
}




        }

        
        )}