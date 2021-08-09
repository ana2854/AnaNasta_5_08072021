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



const url = 'http://localhost:3000/api/teddies';
async function getBears () {
    const response = await fetch (url);
    const data = await response.json();
    const [name] = data;

    document.getElementById('norbert').textContent = name;
  
}

getBears();

