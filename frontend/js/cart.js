

      /*let dataSaved = localStorage.getItem("panier");

      const cartProducts = document.getElementById("cart-products");
      const chosenProduct = document.createElement('div').className('chosen-product');

      let div = cartProducts.appendChild("chosen-product");
      div.innerHTML = dataSaved;*/

      if (typeof(Storage) !== "undefined") {
        // Retrieve
        document.getElementById("cart-products").innerHTML = localStorage.getItem("panier");
        } else {
        document.getElementById("result").innerHTML = "Browser does not support Web Storage.";
        }
  
    


  

 
