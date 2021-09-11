import {
  ProductGroup,
  Product,
  ShopppingCartItem,
  ShoppingCart,
} from "./model.js";

import Checkout from "./view.js";
let mlecniProizvodi = new ProductGroup("Mlecni proizvodi", 8);
let svezeMeso = new ProductGroup("Sveze Meso", 20);

let mleko = new Product(12345, "Mleko", 100, mlecniProizvodi);
let pavlaka = new Product(54321, "Pavlaka 180g", 54.9, mlecniProizvodi);
let juneciBut = new Product(56789, "Juneci but kg", 700, svezeMeso);
let beloMesoFile = new Product(98765, "Belo meso file kg", 640.99, svezeMeso);

let korpa = new ShoppingCart();

korpa.addProduct(mleko, 1);
korpa.addProduct(mleko, 3);
korpa.addProduct(pavlaka, 2);
korpa.addProduct(mleko, 15);
korpa.addProduct(juneciBut, 0.5);
korpa.addProduct(pavlaka, 3);
korpa.addProduct(mleko, 1);
korpa.addProduct(juneciBut, 1);
korpa.addProduct(pavlaka, 5);
korpa.addProduct(beloMesoFile, 1);
korpa.addProduct(beloMesoFile, 0.5);
korpa.addProduct(beloMesoFile, 3.5);

console.log(korpa);

let racun = new Checkout();
racun.printCheck(korpa);
