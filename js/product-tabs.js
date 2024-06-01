import { ProductsService } from './products-service.js';
import { Cart } from './cart.js';

export class ProductList {
  constructor() {
    this.container = document.querySelector('.product-tabs__content');
    this.productsService = new ProductsService();
    this.renderProducts();
  }
  async renderProducts() {
    let productListDomString = '';
    const products = await this.productsService.getProducts();
    products.forEach(product => {
      productListDomString += this.createProductDomString(product);
    });
    this.container.innerHTML = productListDomString;
     this.addEventListeners();
  }

  createProductDomString(product) {
    return `<article class="product-item ${product.category === 'featured' ? 'product-item__active' : ''}" data-id="${product.id}" data-category="${product.category}">
        <a href="product.html" class="product-item__image-link">
          <img
            src="${product.image}"
            alt="${product.name}"
            class="product-item__image"
          />
        </a>
        <a href="product.html" class="product-item__name-link"
          >${product.name}</a
        >
        <p class="product-item__price">$${product.price.toFixed(2)}</p>
        <button class="product-item__button">Add to Cart</button>
      </article>`;
  }
  addEventListeners() {
      this.container.querySelectorAll('.product-item__button').forEach(btn => {
          btn.addEventListener('click', this.addProductToCart.bind(this));
      });

      this.container.querySelectorAll('.product-item__image-link, .product-item__name-link').forEach(btn => {
        btn.addEventListener('click', this.openProductPage.bind(this));
    });
  }

  openProductPage(event){
    const clickedProductItem = event.target.closest('.product-item');
    const id = parseInt(clickedProductItem.dataset.id);
    localStorage.setItem("product-page-id",id);
  }

  addProductToCart(event) {
    const clickedProductItem = event.target.closest('.product-item');
    const id = clickedProductItem.dataset.id;
    const cart = new Cart();
    cart.addProduct(id);
    console.log(cart);
    //showAlert('Added to cart!');
  }
}




/*const tabButtons = [...document.querySelectorAll(".product-tabs__button")];
const productTabs = [...document.querySelectorAll(".product-tabs__tab")];
tabButtons.forEach((button) => {
  button.addEventListener("click", function () {
    if (this.classList.contains("product-tabs__button--active")) return;

    // Open Active Button
    tabButtons.forEach((button) =>
      button.classList.remove("product-tabs__button--active")
    );
    this.classList.add("product-tabs__button--active");

    // Open Active Tab
    productTabs.forEach((tab) =>
      tab.classList.remove("product-tabs__tab--active")
    );
    const { tabName } = this.dataset;
    const activeTab = productTabs.find(
      (tab) => tab.dataset.tabName === tabName
    );
    activeTab.classList.add("product-tabs__tab--active");
  });
});
*/

new ProductList();
