export class ProductGroup {
  #title;
  #vat;
  constructor(title, vat) {
    this.#title = title;
    this.#vat = vat;
  }
  get vat() {
    return this.#vat;
  }

  get title() {
    return this.#title;
  }

  set title(title) {
    this.#title = title;
  }

  set vat(vat) {
    this.#vat = vat;
  }
}

export class Product {
  #barCode;
  #title;
  #price;
  group;
  constructor(barCode, title, price, group) {
    if (
      Number(barCode) != NaN &&
      Number(barCode) > 0 &&
      title.trim() !== "" &&
      Number(price) != NaN &&
      Number(price) > 0
    );
    this.#barCode = Math.ceil(Number(barCode));
    this.#title = title;
    this.#price = Number(price);
    this.group = group;
  }
  get barCode() {
    return this.#barCode;
  }

  get title() {
    return this.#title;
  }

  get price() {
    return this.#price;
  }

  set barCode(barCode) {
    if (Number(barCode != NaN && Number(barCode) > 0)) this.#barCode = barCode;
  }

  set title(title) {
    if (title.trim() !== "") this.#title = title;
  }

  set price(price) {
    if (Number(price) != NaN && Number(price) > 0) this.#price = price;
  }

  set group(group) {
    this.group = group;
  }
}

export class ShopppingCartItem {
  #product;
  #quantity;
  constructor(product, quantity) {
    this.#product = product;
    this.#quantity = quantity;
  }
  get product() {
    return this.#product;
  }
  get quantity() {
    return this.#quantity;
  }
  set product(product) {
    this.#product = product;
  }

  set quantity(quantity) {
    this.#quantity = quantity;
  }
}

export class ShoppingCart {
  items;
  constructor() {
    this.items = [];
  }
  addProduct(product, quantity = 1) {
    let item = this.items.find((prod) => product.title == prod.product.title);
    if (!item) {
      this.items.push(new ShopppingCartItem(product, quantity));
    } else {
      item.quantity += quantity;
    }
  }
}
