
 

      /*let dataSaved = localStorage.getItem("panier");

      const cartProducts = document.getElementById("cart-products");
        const chosenProduct = document.createElement('div').className('chosen-product');
        let div = cartProducts.appendChild("chosen-product");

      div.innerHTML = dataSaved;*/

     // si le local storage n'est pas vide
       if (typeof(Storage) !== "undefined") {
       // récupère les datas 
       affichageProduitsChoisis()
       console.log ('ok')
        
        } else {
        document.getElementById("result").innerHTML = "Browser does not support Web Storage.";
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
              `<p> Nom : ${(dataSaved[i].name)}
                </p>`;

            div.innerHTML = content;

          }
       
        
        }