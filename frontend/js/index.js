/*let url = `http://localhost:3000/api/teddies`;

fetch(url)
.then(function(response){
return response.json();
})
.then(function(data) {
    console.log(data); {
    let peluches = '<div>';
    for (let name of data ) {
        peluches += `<div>${name}</div>`
    }
    peluches += '</div>';
    document.querySelector('#peluches').innerHTML = peluches;
    }
});
*/

/*


const url = 'http://localhost:3000/api/teddies';
async function getBears () {
    const response = await fetch (url);
    const data = await response.json();
    const [name] = data;

    document.getElementById('norbert').textContent = name;
  
}

getBears();


*/

/*


    
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

   


function affichagePeluches(data) {
    let ours = document.getElementById("peluches");

    for (let i = 0 ; i < data.length; i++) {
        let div = document.createElement('div');
        div.className = "ours";
        ours.appendChild(div);

        let link = "product.html?id=" + data[i]._id;

        let content = '';

        content += "<a href=" + link + ">";

        content +=  
            "<img" +
            " class="+ data[i]._id +
            " src=" + data[i].imageUrl + 
            ">";

        content += 
        `
            <p> Nom :   ${data[i].name}  </p>
            <p> Prix : ${data[i].price} €  </p>
            <p> Description :  ${data[i].description} </p>
        `;

        content += "</a>";

        div.innerHTML = content;
    }
}







