var shoppingCart = require('../src/addProduct').shoppingCart;
var addProduct = require('../src/addProduct').addProduct;
var getTotal = require('../src/addProduct').getTotal;
var calculateTax = require('../src/addProduct').calculateTax;

describe("Shopping Cart suite", function() {
  describe("Add products to the shopping cart", function() {
    beforeAll(function() {
      addProduct('dove_soap', 5);
    });

    afterAll(function() {
      shoppingCart.products = [];
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

    it("Adds 3 more dove soaps to the shopping cart", function() {
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
  });
});

describe("Shopping Cart suite with tax", function() {
  afterAll(function() {
    shoppingCart.products = [];
  });
  describe("Calculate the tax rate of the shopping cart with multiple items", function() {

    it("Adds 2 dove soaps and 2 axe deos to the shopping cart", function() {
      addProduct('dove_soap', 2);
      addProduct('axe_deo', 2);
      expect(shoppingCart.products).toContain(
        {
          name: 'dove_soap',
          unit_price: 39.99,
          qty: 2
        },
        {
          name: 'axe_deo',
          unit_price: 99.99,
          qty: 2
        }
      );
    });

    it("It calculates the total price of the items in the cart", function() {
      expect(shoppingCart.total_price).toEqual(279.96);
    })

    it("It calculates total price with tax for the items in the cart", function() {
      calculateTax();
      expect(shoppingCart.grand_total).toEqual(314.96);
    })
  });
})
