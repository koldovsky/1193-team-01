import { ProductsService } from "./products-service.js";
import { Cart } from "./cart.js";

const service = new ProductsService();
const products = await service.getProducts();
const id = parseInt(localStorage.getItem("product-page-id"));

const findedProduct = products.find((item) => {
  return item.id === id;
});


const imageSmallProduct = document.querySelector(".main__product-img");
const titleProduct = document.querySelector(".main__product-title");
const codeProduct = document.querySelector(".main__product-info");
const priceProduct = document.querySelector(".main__product-price");
const decscriptionProduct = document.querySelector(".main__product-text");

titleProduct.innerText = findedProduct.name;
codeProduct.innerText += findedProduct.code;
priceProduct.innerText += findedProduct.price;
decscriptionProduct.innerHTML = findedProduct.description;
imageSmallProduct.innerHTML = `<img
                    width="104"
                    src="${findedProduct.image[0]}"
                    alt="${findedProduct.name}"
                    class="main__product-images"
                    />`;

