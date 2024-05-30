import { ProductsService } from './products-service.js';

const service = new ProductsService();
const products = await service.getProducts();
const id = localStorage.getItem("product-page-id");

const findedProduct = products.find((item)=>{
    return item.id = id;
})

console.log(findedProduct);
