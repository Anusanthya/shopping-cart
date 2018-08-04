var shoppingCart = {}, products = [];
var priceCatalogue = {
  dove: 39.99
}

function addProduct(product, qty) {
  products.push(
    {
      item: product,
      unit_price: priceCatalogue[product],
      qty: qty
    }
  );
  shoppingCart.products = products;
  return shoppingCart;
}

module.exports = {
  shoppingCart,
  addProduct
}
