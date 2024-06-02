export function updateCartWidget(quantity) {
  const cartWidget = document.querySelector(".cart-widget");
  //setTotalQuantity
  cartWidget.querySelector(".products-summary-number").innerText = quantity;
  //toggleCartWidget
  if (quantity === 0) {
    cartWidget.style.display = "none";
  } else {
    cartWidget.style.display = "flex";
  }
}