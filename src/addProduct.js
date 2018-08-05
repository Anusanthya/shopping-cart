var shoppingCart = {products: []};
var priceCatalogue = {
  dove_soap: 39.99
}

function addProduct(product, qty) {
  var isProductAdded = shoppingCart.products.find(function(item) {
    if (item.name === product) {
      return item.qty += qty;
    }
  });

  if(!isProductAdded) {
    shoppingCart.products.push({name: product, unit_price: priceCatalogue[product], qty: qty});
  }

  getTotal();
}

function getTotal() {
  var total;
  shoppingCart.products.forEach(function(product) {
    total = product.unit_price * product.qty;
  });
  shoppingCart.total_price = +total.toFixed(2);
}

module.exports = {
  shoppingCart,
  addProduct,
  getTotal
}
