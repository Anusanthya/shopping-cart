var shoppingCart = {products: []};
var priceCatalogue = {
  dove: 39.99
}

function addProduct(product, qty) {
  shoppingCart.products.push(
    {
      item: product,
      unit_price: priceCatalogue[product],
      qty: qty
    }
  );
  return shoppingCart;
}

function getTotal() {
  var total;
  shoppingCart.products.forEach(function(product) {
    total = product.unit_price * product.qty;
  });
  shoppingCart.total_price = +total.toFixed(2);
}

module.exports = {
  addProduct,
  getTotal
}
