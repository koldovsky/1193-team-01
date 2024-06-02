import { ProductsService } from "./products-service.js";
import { updateCartWidget } from "./cart-widget.js";

export class Cart {
  static #instance;
  constructor() {
    if (Cart.#instance) return Cart.#instance;
    Cart.#instance = this;
    this.container = document.querySelector(".cart__product-container");
    this.productsService = new ProductsService();
    this.cart = JSON.parse(localStorage.getItem("cart") || "{}");
    this.addEventListeners();
    this.renderCart();
  }

  addProductOperation(id, quantity) {
    this.cart[id] = (this.cart[id] || 0) + quantity;
  }

  changeQuantity(value, productId) {
    this.cart[productId] = value;
    this.saveCart();
    this.renderCart();
  }

  addProduct(id, quantity = 1) {
    this.addProductOperation(id, quantity);
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

  showNoProductsMessage() {
    document.querySelector(".cart__body").style.display = "none";
    document.querySelector(".cart__footer").style.display = "none";
    document.querySelector(".cart__no-products-message").style.display =
      "block";
  }

  showNotEmptyMessage() {
    document.querySelector(".cart__body").style.display = "block";
    document.querySelector(".cart__footer").style.display = "block";
    document.querySelector(".cart__no-products-message").style.display = "none";
  }

  showCart() {
    document.querySelector(".cart").classList.add("active");
  }

  hideCart() {
    document.querySelector(".cart").classList.remove("active");
  }

  addEventListeners() {
    document.querySelector(".cart__close-btn").addEventListener("click", () => {
      this.hideCart();
    });
    document.querySelector(".cart-widget").addEventListener("click", () => {
      this.showCart();
    });
  }

  async renderCart() {
    let total = 0;
    let cartDomString = ``;
    let totalQuantity = Object.values(this.cart).reduce(
      (sum, value) => sum + value,
      0
    );

    updateCartWidget(totalQuantity);

    if (totalQuantity === 0) {
      this.showNoProductsMessage();
      return;
    } else {
      this.showNotEmptyMessage();
    }

    for (const productId in this.cart) {
      console.log(productId, Number(productId), this.cart);
      const product = await this.productsService.getProductById(
        Number(productId)
      );
      const quantity = this.cart[productId];
      cartDomString += this.createCartProductDomString(product, quantity);
      total += product.price * this.cart[productId];
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
