/*
//Création d'un objet javascript du nouvel utilisateur 
const newUser = {
    firstname : 
    lastname: 
    address: 
    city:
    email:

};

//ENVOI DES DATAS avec FETCH
// POST : "https://jsonplaceholder.typicode.com/"
let root = "https://jsonplaceholder.typicode.com/";


//Envoi de l'utilisateur sur l'api 
const promiseUser = fetch(, {
    method: "POST", 
    //Convertion de mon objet javascript en une chaine JSON correspondant à la valeur spécifiée
    body: JSON.stringify(newUser),
    headers: {
        "Content-Type" : "application/json",
    }
});

promiseUser.then(asyn(response) => {
    try {
        console.log(response)
        const contenu = await response.json();
        console.log(contenu)
    } catch(e) {
        console.log(e);
    }
});







// Selection de ma classe 

let confirmMsg = document.getElementsByClassName("confirmMessage");

contentConfirmMsg = '';

contentConfirmMsg += `

<h1>Merci pour votre achat M DUPONT !</h1>

<p>Prix : </p>

<p>Id de commande : </p>

`



*/

