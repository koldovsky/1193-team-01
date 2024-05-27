const tabButtons = [...document.querySelectorAll(".product-tabs__button")];
const productTabs = [...document.querySelectorAll(".product-tabs__tab")];
tabButtons.forEach((button) => {
  button.addEventListener("click", function () {
    if (this.classList.contains("product-tabs__button--active")) return;

    // Open Active Button
    tabButtons.forEach((button) =>
      button.classList.remove("product-tabs__button--active")
    );
    this.classList.add("product-tabs__button--active");

    // Open Active Tab
    productTabs.forEach((tab) =>
      tab.classList.remove("product-tabs__tab--active")
    );
    const { tabName } = this.dataset;
    const activeTab = productTabs.find(
      (tab) => tab.dataset.tabName === tabName
    );
    activeTab.classList.add("product-tabs__tab--active");
  });
});
