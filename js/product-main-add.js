const id = parseInt(localStorage.getItem("product-page-id"));
console.log(id);

// Функція для обробки форми
function saveForm(event) {
    event.preventDefault();
    const form = document.getElementById('product-form');
    const myForm = new FormData(form);
    const number = myForm.get('number');
    console.log('Number inside function:', number);
    

    // Використання numberProduct після збереження
    import('./cart.js').then(({ Cart }) => {
        const cart = new Cart();
        cart.addProduct(id, number);
        console.log(cart);
    });
}

const form = document.getElementById('product-form');
form.addEventListener('submit', saveForm);