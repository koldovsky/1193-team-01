(function() {
   
  function showInfo() {
    const storedProduct = localStorage.getItem('product');
    if (!storedProduct) return;
    const product = JSON.parse(storedProduct);
    document.querySelector('.main__product-title').innerText = product.title;
  }

  showInfo();

})();