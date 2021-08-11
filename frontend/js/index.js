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

fetch("http://localhost:3000/api/teddies")
    .then(response => response.json())
    .then(peluches => {
        const ul = document.getElementById('peluches');
        peluches.forEach(peluche => {
             peluche = new Peluches(peluche);
             peluche.setContainer(ul);
             peluche.display('peluches');
        })
    })
    .catch(function (error){
        console.log(error)
    });

    */

    

    const getBears = async function () {
    try {
            let response = await fetch ('http://localhost:3000/api/teddies')
            if (response.ok) {
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

    getBears();

    /* EXEMPLE JORDI POUR AFFICHAGE PELUCHES 

function affichagePeluches(data) {
    let peluches = document.getElementById("peluches")

    let content = '';

   for (let i = 0 ; i < data.length; i++) 
     
    {
         content += 
            '<div>'+ data[i].name + '</div>'+
            '<div>'+ data[i].price + '</div>';
    }

    peluches.innerHTML= content;

}

*/

function affichagePeluches(data) {
    const peluche = data[0];
    const pelucheDiv = document.getElementById('peluches');

    const pelucheNom = peluche.name;
    const titre = document.createElement("h1");
    titre.innerHTML = pelucheNom;

    pelucheDiv.appendChild(titre);

}

  