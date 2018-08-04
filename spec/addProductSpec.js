var addProduct = require('../src/addProduct').addProduct;

describe("Shopping Cart suite", function() {
  describe("Adds products to the shopping cart", function() {
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
      })
    })
  })
})
