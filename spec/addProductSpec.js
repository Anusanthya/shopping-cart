var shoppingCart = require('../src/addProduct').shoppingCart;
var addProduct = require('../src/addProduct').addProduct;
var getTotal = require('../src/addProduct').getTotal;

describe("Shopping Cart suite", function() {
  describe("Add products to the shopping cart", function() {
    beforeAll(function() {
      addProduct('dove_soap', 5);
    });

    it("Adds 5 dove soaps to the shopping cart", function() {
      expect(shoppingCart.products).toContain(
          {
            name: 'dove_soap',
            unit_price: 39.99,
            qty: 5
          }
      );
    })

    it("It calculates the total price of the items in the cart", function() {
      expect(shoppingCart.total_price).toEqual(199.95);
    })

    it("Adds 8 dove soaps to the shopping cart", function() {
      addProduct('dove_soap', 3);
      expect(shoppingCart.products).toContain(
          {
            name: 'dove_soap',
            unit_price: 39.99,
            qty: 8
          }
      );
    });

    it("It updates total price of the items in the cart", function() {
      expect(shoppingCart.total_price).toEqual(319.92);
    })
  })
})
