
    // PAGE D'ACCEUIL
    
    /* On définit la fonction asynchrone */
    const getBears = async function () {
    try {

            /*On stock la reponse*/
            let response = await fetch ('http://localhost:3000/api/teddies')
            if (response.ok) {
                /* On stock les datas en format json */
            let data = await response.json()
            console.log (data);
            affichagePeluches(data);
           

            } else {
                console.error('Retour du serveur' , response.status)
            }
            } catch (e) {
                console.log(e);
            }
        }

    /*on appelle la fonction*/
    getBears();

   

//PAGE D'ACCEUIL - Récupération des peluches via l'api et mise en forme
function affichagePeluches(data) {
    let peluches = document.getElementById("peluches");

    for (let i = 0 ; i < data.length; i++) {
        let divOursAccueil = document.createElement('div');
        divOursAccueil.className = "ours accueil";
        peluches.appendChild(divOursAccueil);

        let link = "product.html?id=" + data[i]._id;

        let content = '';

        content += "<a href=" + link + ">";

        content +=  
            "<img" +
            " id="+ data[i]._id +
            " src=" + data[i].imageUrl + 
            ">";

        content += 
        `
            <p> Nom :   ${data[i].name}  </p>
            <p> Prix : ${data[i].price} €  </p>
            <p> Description :  ${data[i].description} </p>
        `;

        content += "</a>";

        divOursAccueil.innerHTML = content;
    }
}









