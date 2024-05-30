(function() {
   
  function showInfo() {
    const product = JSON.parse(localStorage.product || "{}");
    if (!product) return;
    document.querySelector('.main__product-title')
      .innerText = product.title;
    document.querySelector('.main__product-info')
      .innerText = product.code;
    document.querySelector('.main__product-price')
      .innerText = product.price;
  }

  showInfo();

})();
