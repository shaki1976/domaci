// import {
//   ProductGroup,
//   Product,
//   ShopppingCartItem,
//   ShoppingCart,
// } from "./model.js";

export default class Checkout {
  printCheck(shoppingCart) {
    const container = document.querySelector(".container");
    const tbody = document.querySelector(".tbody");
    shoppingCart.items.forEach((item) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `<td>${item.product.group.title}</td>
          <td>${item.product.title}</td>
          <td>${item.product.price}</td>
          <td>${item.quantity}</td>
          <td>${item.product.group.vat}</td>
          <td>${item.quantity * item.product.price}</td>
          `;
      tbody.append(tr);
    });
    let totalVat = shoppingCart.items.reduce((sum, item) => {
      return (
        sum +
        (item.product.group.vat / 100) * (item.quantity * item.product.price)
      );
    }, 0);
    let total = shoppingCart.items.reduce((sum, item) => {
      return (
        sum +
        (1 + item.product.group.vat / 100) *
          (item.quantity * item.product.price)
      );
    }, 0);
    const pTotal = document.createElement("p");
    pTotal.textContent = `VAT/TOTAL        ${totalVat}/${total} din`;
    container.append(pTotal);
  }
}
