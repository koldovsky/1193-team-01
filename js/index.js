function init() {
    import('./header-burger-menu.js');    
    import('./product-tabs.js');
    import('./headphones-carousel.js');
    import('./customer-review.js');
    import('./products-service.js');
}

const totalPartials = document.querySelectorAll('[hx-trigger="load"], [data-hx-trigger="load"]').length;
let loadedPartialsCount = 0;

document.body.addEventListener('htmx:afterOnLoad', () => {
    loadedPartialsCount++;
    if (loadedPartialsCount === totalPartials) init();
});