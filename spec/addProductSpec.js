var addProduct = require('../src/addProduct').addProduct;
var getTotal = require('../src/addProduct').getTotal;

describe("Shopping Cart suite", function() {
  describe("Add products to the shopping cart", function() {
    var shoppingCart;
    beforeAll(function() {
      shoppingCart = addProduct('dove', 5);
    });

    it("Adds 5 dove soaps to the shopping cart", function() {
      expect(shoppingCart).toEqual({
        products:[
          {
            item: 'dove',
            unit_price: 39.99,
            qty: 5
          }
        ]
      });
    })

    it("It calculates the total price of the items in the cart", function() {
      getTotal();
      expect(shoppingCart.total_price).toEqual(199.95);
    })
  })
})
