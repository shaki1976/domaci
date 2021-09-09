class ProductGroup {
  title;
  vat;
  constructor(title, vat) {
    this.title = title;
    this.vat = vat;
  }
}

class Product {
  barCode;
  title;
  price;
  group;
  constructor(barCode, title, price, group) {
    this.barCode = barCode;
    this.title = title;
    this.price = price;
    this.group = group;
  }
}

class ShopppingCartItem {
  product;
  quantity;
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }
}

class ShoppingCart {
  items;
  constructor() {
    this.items = [];
  }
  addProduct(product, quantity = 1) {}
}
class Checkout {
  printCheck(shoppingCart) {}
}
