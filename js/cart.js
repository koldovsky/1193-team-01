import { ProductsService } from "./products-service.js";

/* ================ */
const widget = document.querySelector(".cart-widget");
const cart = document.querySelector(".cart");
widget.addEventListener("click", function () {
  cart.classList.toggle("active");
});
const closeBTN = document.querySelector('.cart__close-btn');
closeBTN.addEventListener("click", function () {
  cart.classList.remove("active");
});
/* ================ */

export class Cart {
  static #instance;
  constructor() {
    if (Cart.#instance) return Cart.#instance;
    Cart.#instance = this;
    this.container = document.querySelector(".cart__product-container");
    this.productsService = new ProductsService();
    this.cart = JSON.parse(localStorage.getItem("cart") || "{}");
    //this.addEventListeners();
    this.renderCart();
  }

  addProductOperation(id) {
    this.cart[id] = (this.cart[id] || 0) + 1;
  }

  changeQuantity(value, productId) {
    this.cart[productId] = value;
    this.saveCart();
    this.renderCart();
  }

  /*deleteProductOperation(id) {
      if (this.cart[id] > 1) {
        this.cart[id] -= 1;
      } else {
        delete this.cart[id];
      }
    }*/
  addProduct(id) {
    this.addProductOperation(id);
    this.saveCart();
    this.renderCart();
  }
  deleteProduct(id) {
    delete this.cart[id];
    this.saveCart();
    this.renderCart();
  }
  saveCart() {
    localStorage.setItem("cart", JSON.stringify(this.cart));
  }

  /*
    addEventListeners() {
      document.querySelector(".cart").addEventListener("click", this.renderCart.bind(this));
      document.querySelector(".order").addEventListener("click", this.order.bind(this));
    }
    */
  async renderCart() {
    let total = 0;
    let cartDomString = ``;
    let totalQuantity = 0;

    for (const productId in this.cart) {
      const productID = parseInt(productId);
      const product = await this.productsService.getProductById(productID);
      const quantity = this.cart[productId];
      cartDomString += this.createCartProductDomString(product, quantity);
      total += product.price * this.cart[productId];
      totalQuantity += this.cart[productId];
    }

    cartDomString += `<div class="product-total">
                        <span class="product-total__title">Total:</span>
                        <span class="product-total__number">$${total.toFixed(
                          2
                        )}</span>
                      </div>`;

    this.container.innerHTML = cartDomString;

    this.container.querySelectorAll(".product-row__count").forEach((element) =>
      element.addEventListener("input", (event) => {
        const currentValue = Number(event.target.value);
        const currentID = Number(
          event.target.closest(".product-row").dataset.id
        );
        if (currentValue === 0) {
          this.deleteProduct(currentID);
        } else {
          this.changeQuantity(currentValue, currentID);
        }
      })
    );

    this.container
      .querySelectorAll(".product-item__delete")
      .forEach((element) =>
        element.addEventListener("click", (event) => {
          const currentID = Number(
            event.target.closest(".product-row").dataset.id
          );
          this.deleteProduct(currentID);
        })
      );

    /* ================ */
    document.querySelector(".products-summary-number").innerText =
      totalQuantity;
    /* ================ */
  }

  createCartProductDomString(product, quantity) {
    return `<div class="product-row" data-id="${product.id}">
                <div class="product-row__image-col">
                    <img
                        src="${product.image}"
                        alt="${product.name}"
                        class="product-row__image"
                    />
                </div>
                <div class="product-row__title-col">
                    <h6 class="product-row__title">${product.name}</h6>
                </div>
                <div class="product-row__count-col">
                    <input type="number" name="product-count" value="${quantity}" min="0" class="product-row__count" onkeydown="return false">
                </div>
                <div class="product-row__price-col">
                    <span class="product-row__price">$${(
                      quantity * product.price
                    ).toFixed(2)}</span>
                </div>
                <div class="product-item__delete-col">
                  <button class="product-item__delete"><img class="product-item__delete-icon" src="img/index.cart.partial/delete.svg" alt="Delete Product"></button>
                </div>
            </div>`;
  }

  /*
    
    
    async order(ev) {
      if (Object.keys(this.cart).length === 0) return showAlert("Please choose products to order", false);
      const form = document.querySelector(".form-contacts");
      if (!form.checkValidity()) return showAlert("Please fill form correctly", false);
      ev.preventDefault();
      const data = new FormData();
      data.append("cart", JSON.stringify(this.cart));
      data.append("name", form.querySelector("input[name=name]").value);
      data.append("email", form.querySelector("input[name=email]").value);
      fetch("https://formspree.io/f/mrgjwwro", {
        method: "POST",
        headers: {
          'Accept': 'application/json'
        },
        body: data
      })
        .then(() => {
          form.reset();
          this.cart = {};
          this.saveCart();
          this.renderCart();
          showAlert("Thank you! ");
          document.querySelector("#modal-cart .close-btn").click();
        })
        .catch((error) => showAlert("There is an error: " + error, false));
    }*/
}
new Cart();
