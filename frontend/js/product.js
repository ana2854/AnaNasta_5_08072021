

/*function getProduit () {
    const params = new URLSearchParams(window.location.search);

    console.log(params);

}
*/

const queryString = 'id=5beaaa8f1c9d440000a57d95';

const a = new URLSearchParams(queryString)

const idProduct = a.get('id')

console.log(`Value for 'id' is : ${idProduct}`)



for (const [key, value] of a) {
    console.log(`${key} => ${value}`)
}



