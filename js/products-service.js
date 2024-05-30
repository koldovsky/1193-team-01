class ProductsService {
    constructor() {
        this.products = null;
    }

    async getProducts() {
        if (!this.products) {
            this.products = await (await fetch('api/products.json')).json();
        }
        return this.products;
    }
}

const productList = new ProductsService();
await productList.getProducts();
console.log(productList);