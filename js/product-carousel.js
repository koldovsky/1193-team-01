import { ProductsService } from "./products-service.js";

const service = new ProductsService();
const products = await service.getProducts();
const id = parseInt(localStorage.getItem("product-page-id"));

const findedProduct = products.find((item) => {
  return item.id === id;
});

const image = findedProduct.image;


let slideIdx = 0;

function renderSlide() {
  const slideContainer = document.querySelector(".main__product-container");
  slideContainer.innerHTML = `<img
                            src="${findedProduct.image[slideIdx]}"
                            alt="${findedProduct.name}"
                            class="main__product-image"
                            />`;
}

function nextSlide() {
  slideIdx = slideIdx + 1 >= image.length ? 0 : slideIdx + 1;
  renderSlide();
}

function prevSlide() {
  slideIdx = slideIdx - 1 < 0 ? image.length - 1 : slideIdx - 1;
  renderSlide();
}

renderSlide();

const btnNext = document.querySelector(".arrow-svg_right");
btnNext.addEventListener("click", nextSlide);

const btnPrev = document.querySelector(".arrow-svg_left");
btnPrev.addEventListener("click", prevSlide);
