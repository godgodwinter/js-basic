// object literal
const cartItems = document.getElementById('foo');

// // es5
function addProduct(name, catergory) {
    return {
        name: name,
        catergory: catergory
    }
}

var getProduct = addProduct('Iphone13', "Gadjet")

// console.log(getProduct);


// es6
cartItems.innerHTML = `Produk : ${getProduct.name} Category:${getProduct.catergory}`