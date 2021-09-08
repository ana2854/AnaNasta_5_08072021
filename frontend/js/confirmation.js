
//Création d'un objet javascript du nouvel utilisateur 
const newUser = {
    name : "ana"

};

//Envoi de l'utilisateur sur l'api 
const promise = fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST", 
    //Convertion de mon objet javascript en une chaine JSON correspondant à la valeur spécifiée
    body: JSON.stringify("newUser"),
    headers: {
        "Content-Type" : "application/json",
    }
})







// Selection de ma classe 

let confirmMsg = document.getElementsByClassName("confirmMessage");

contentConfirmMsg = '';

contentConfirmMsg += `
<h1>Merci pour votre achat !</h1>

<p>Prix : </p>

<p>Id de commande : </p>

`






