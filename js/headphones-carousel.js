import { ProductsService } from "./products-service.js";
import { Cart } from "./cart.js";

export class ProductList {
  constructor() {
    this.container = document.querySelector(".headphones-carousel__slides");
    this.productsService = new ProductsService();
    this.renderProducts();
    this.slideIdx = 0;
    this.renderSlide();
    this.btnNext = document.querySelector(".headphones-carousel__btn-next");
    this.btnPrev = document.querySelector(".headphones-carousel__btn-prev");
    this.btnNext.addEventListener("click", this.nextSlide.bind(this));
    this.btnPrev.addEventListener("click", this.prevSlide.bind(this));
    window.addEventListener("resize", this.renderSlide.bind(this));
  }

  async renderProducts() {
    let productListDomString = "";
    const products = await this.productsService.getProducts();
    const lastFiveProducts = products.slice(-5);
    lastFiveProducts.forEach((product) => {
      productListDomString += this.slides(product);
    });
    this.container.innerHTML = productListDomString;
    this.addEventListeners();
  }

  slides(product) {
    return `<article class="headphones-carousel__slide" data-id="${product.id}">
       <a href="product.html" class="headphones-carousel__slide-link">
          <img
         class="headphones-carousel__slide-img"
         src="${product.image}"
         alt="${product.name}"
       />
       <h3 class="headphones-carousel__slide-title">${product.name}</h3>
       </a>
       <p class="headphones-carousel__slide-price">$${product.price.toFixed(
         2
       )}</p>
       <div class="headphones-carousel__slide-button">
         <button class="headphones-carousel__button-title" data-id="${
           product.id
         }">
           Add to cart
         </button>
       </div>
     </article>`;
  }

  renderSlide() {
    const slideContainer = document.querySelector(
      ".headphones-carousel__slides"
    );
    slideContainer.innerHTML = this.slides[this.slideIdx];
    if (window.matchMedia("(min-width:768px)").matches) {
      const secondSlideIdx =
        this.slideIdx + 1 >= this.slides.length ? 0 : this.slideIdx + 1;
      slideContainer.innerHTML += this.slides[secondSlideIdx];
      if (window.matchMedia("(min-width:980px)").matches) {
        const thirdSlideIdx =
          secondSlideIdx + 1 >= this.slides.length ? 0 : secondSlideIdx + 1;
        slideContainer.innerHTML += this.slides[thirdSlideIdx];
        if (window.matchMedia("(min-width:1024px").matches) {
          const fourthSlideIdx =
            thirdSlideIdx + 1 >= this.slides.length ? 0 : thirdSlideIdx + 1;
          slideContainer.innerHTML += this.slides[fourthSlideIdx];
        }
      }
    }
  }

  nextSlide() {
    this.slideIdx =
      this.slideIdx + 1 >= this.slides.length ? 0 : this.slideIdx + 1;
    renderSlide();
  }

  prevSlide() {
    this.slideIdx =
      this.slideIdx - 1 < 0 ? this.slides.length - 1 : this.slideIdx - 1;
    renderSlide();
  }

  addEventListeners() {
    this.container
      .querySelectorAll(".headphones-carousel__button-title")
      .forEach((btn) => {
        btn.addEventListener("click", this.addProductToCart.bind(this));
      });

    this.container
      .querySelectorAll(".headphones-carousel__slide-link")
      .forEach((link) => {
        link.addEventListener("click", this.clickOnProductLink.bind(this));
      });
  }

  clickOnProductLink(event) {
    const productLink = event.target.closest(".headphones-carousel__slide");
    const id = parseInt(productLink.dataset.id);
    localStorage.setItem("product-page-id", id);
  }

  addProductToCart(event) {
    const button = event.target.closest(".headphones-carousel__button-title");
    const id = button.dataset.id;
    const cart = new Cart();
    cart.addProduct(id);
  }
}

new ProductList();
