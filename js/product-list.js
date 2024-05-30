(function () {
    const productsFeatured = [
      {
        id: "1",
        images: "img/index.product-tabs/jbl-rr-56.png",
        title: "JBL RR-56",
        code: "21",
        price: "$110,00",
        description: `Take this wireless speaker to the beach, use it in a car or
               outdoors — wherever and whenever you are. Express yourself and enjoy 
               music listening without limits. <br /><br />Specs:<br /><br />
               Battery life — 20 hours <br /> Battery charge time — 4 hours <br />
               Waterproof — yes, IPX7 <br />
               Number of gadgets — up to 2 smartphones can be connected <br />`,
      },
      {
        id: "2",
        images: "img/index.product-tabs/sennheiser-sn-67.png",
        title: "Sennheiser SN-67",
        code: "27",
        price: "$213,00",
        description: `The professional Sennheiser SN-67 headphones have been
               designed to cater to your audio experience and make the sound as clear
                and high-quality as possible. <br /><br />Specs:<br /><br />
               Frequency response — 10 – 30,000 H <br /> Battery life — up to 30 hours 
               <br /> Wireless range — 10 m <br />`,
      },
      {
        id: "3",
        images: "img/index.product-tabs/jbl-gt-345.png",
        title: "JBL GT-345",
        code: "23",
        price: "$120,00",
        description: `This waterproof Bluetooth speaker will be an indispensable
             accessory for your parties and outings. Enjoy your favorite tracks 
             wherever you are! <br /><br />Specs:<br /><br />
             Battery life — 12 hours <br /> Waterproof — yes, IPX7 <br />
             Connector type — 3.5 millimeter stereo <br />
             Compatibility — universal <br />`,
      },
      {
        id: "4",
        images: "img/index.product-tabs/sony-s899.png",
        title: "Sony S890",
        code: "26",
        price: "$259,00",
        description: `These ergonomic and colorful wireless headphones will be
             to the liking of all sound lovers. The headphones feature powerful 
             bass and full immersion into your favorite music on the go. 
             <br /><br />Specs:<br /><br />
             Frequency response — 10Hz – 50kHz <br /> Battery life — 13 hours
             <br /> Charging time — 2.5 hours <br /> Wireless range — 15 m<br />`,
      },
    ];
  
    function productInfoClick(ev) {
      const productId = ev.target.dataset.id;
      const product = productsFeatured.find((product) => product.id === productId);
      localStorage.product = JSON.stringify(product);
    }
  
    function renderProducts(products) {
      const productsContainer = document.querySelector(".product-tabs__tab-featured");
      productsContainer.innerHTML = ""; // Clear existing content if any
      for (const product of products) {
        productsContainer.innerHTML += `
              <article class="product-item">
                  <a href="product.html" class="product-item__image-link info-link" data-id="${product.id}">
                      <img
                          src="${product.images}"
                          alt="${product.title}"
                          class="product-item__image"
                      />
                  </a>
                  <a href="product.html" class="product-item__name-link info-link" data-id="${product.id}">
                      ${product.title}
                  </a>
                  <p class="product-item__price">${product.price}</p>
                  <button class="product-item__button button">Add to Cart</button>
              </article>
          `;
      }
      document
        .querySelectorAll(".info-link")
        .forEach((link) => link.addEventListener("click", productInfoClick));
    }
  
    renderProducts(productsFeatured);
  })();
  