let url = `http://localhost:3000/api/teddies`;

fetch(url)
.then(function(response){
return response.json();
})
.then(function(data) {
    console.log(data);
});