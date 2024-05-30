(function () {
  const products = [
    {
      id: "1",
      images: "img/index.product-tabs/jbl-rr-56.png",
      title: "JBL RR-56",
      code: "21",
      price: "$110,00",
      description: `Take this wireless speaker to the beach, use it in a car or
                    outdoors — wherever and whenever you are. Express yourself and enjoy 
                    music listening without limits. <br /><br />Specs:<br /><br />
                    Battery life — 20 hours <br /> 
                    Battery charge time — 4 hours <br />
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
                    Frequency response — 10 – 30,000 H <br /> 
                    Battery life — up to 30 hours <br /> 
                    Wireless range — 10 m <br />`,
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
                    Battery life — 12 hours <br /> 
                    Waterproof — yes, IPX7 <br />
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
                    Frequency response — 10Hz – 50kHz <br /> 
                    Battery life — 13 hours <br /> 
                    Charging time — 2.5 hours <br /> 
                    Wireless range — 15 m <br />`,
    },
    {
      id: "5",
      images: "img/index.product-tabs/marshall-dr-67.png",
      title: "Marshall DR67",
      code: "34",
      price: "$459,00",
      description: `These headphones from one of the best audio brands in the
                    world will introduce you to the world of incredibly pure and 
                    high-quality sound.
                    <br /><br />Specs:<br /><br />
                    Wireless connection — Bluetooth 4.1, AptX <br /> 
                    Microphone — 1 button remote mic <br /> 
                    Battery like — 14 hours <br /> 
                    Charging time — 3 hours <br />`,
    },
    {
      id: "6",
      images: "img/index.product-tabs/v-moda-er-65.png",
      title: "V-MODA ER65",
      code: "31",
      price: "$80,00",
      description: `The V-MODA ER65 wireless headphones have been designed with 
                    top-quality drivers. The headphones were tested at 6 
                    different frequency levels for consistency, and their unique 
                    technology provides perfect sound even when on Bluetooth.
                    <br /><br />Specs:<br /><br />
                    Sensitivity — 107 DB @ 1kHz 1mW <br /> 
                    Frequency response — 5Hz - 30,000Hz <br /> 
                    BBattery life — 8 hours <br /> 
                    Charging time — 3 hours <br />`,
    },
    {
      id: "7",
      images: "img/index.product-tabs/bose-g656-a.png",
      title: "Bose G656-A",
      code: "32",
      price: "$65,00",
      description: `Enjoy your favourite tracks with the all-new Bose wireless 
                    speakers. Powered by Bluetooth 5.0, the portable speaker 
                    is easily connected with your smartphone or laptop for an 
                    exceptional music listening experience.
                    <br /><br />Specs:<br /><br />
                    Frequency response — 60 Hz – 20 KHz <br /> 
                    Play time — 15+ hours <br /> 
                    Charging time — 2 hours to full recharge <br /> 
                    Bluetooth range — 14 m <br />`,
    },
    {
      id: "8",
      images: "img/index.product-tabs/airpulse-r255.png",
      title: "AirPulse R255",
      code: "33",
      price: "$185,00",
      description: `15 hours of wireless playback and award-winning clear 
                    sound by AirPulse. These headphones are your perfect 
                    choice for work, travels, or just everyday use wherever 
                    you go.
                    <br /><br />Specs:<br /><br />
                    Battery life — 15 hours <br /> 
                    Sensitivity — 100 DB @ 1kHz 1mW <br /> 
                    Frequency response — 5Hz - 40,000Hz <br />`,
    },

    {
      id: "9",
      images: "img/index.product-tabs/sony-yt555.png",
      title: "Sony YT555",
      code: "219",
      price: "$140,00",
      description: `Simple and convenient, this wireless speaker will be your 
                    faithful companion wherever you are — at work, at home, 
                    in the car, or on a picnic. The Sony brand delivers perfect 
                    sound and deep bass in all conditions.
                    <br /><br />Specs:<br /><br />
                    Battery life — 18 hours <br /> 
                    Battery charge time — 2 hours <br /> 
                    Waterproof — no <br /> 
                    Connector type — 3.5 mm stereo <br />
                    Compatibility — universal <br />`,
    },
    {
      id: "10",
      images: "img/index.product-tabs/sony-tt-56.png",
      title: "Sony TT56",
      code: "306",
      price: "$98,00",
      description: `These genuine leather-trimmed headphones sit perfectly on 
                    your head and are ready for adventures with you! Perfectly 
                    clear sound is provided.
                    <br /><br />Specs:<br /><br />
                    Sensitivity — 101 DB/MW <br /> 
                    Frequency response — 2 Hz–20,000 Hz <br /> 
                    Battery life — 20 hours <br /> 
                    Noise canceling on/off switch <br />`,
    },
    {
      id: "11",
      images: "img/index.product-tabs/jbl-br55.png",
      title: "JBL BR-55",
      code: "22",
      price: "$110,00",
      description: `Really portable and really powerful, this Bluetooth 
                    speaker is a perfect choice for outdoor parties, travels, 
                    or meeting with your friends. Enjoy your favorite tracks 
                    without limits!
                    <br /><br />Specs:<br /><br />
                    Battery life — 20 hours <br /> 
                    Battery charge time — 4 hours <br /> 
                    Waterproof — yes, IPX7 <br /> 
                    Number of gadgets — up to 2 smartphones can be connected <br />`,
    },
    {
      id: "12",
      images: "img/index.product-tabs/jbl-334wn.png",
      title: "JBL 334WN",
      code: "24",
      price: "$140,00",
      description: `Listen to your favorite tracks all day long thanks to the 
                    powerful battery of these headphones (up to 30 hours). And 
                    when the battery goes down, you can plug in the cable and 
                    continue enjoying your music.
                    <br /><br />Specs:<br /><br />
                    Frequency response — 10Hz – 50kHz <br /> 
                    Battery life — 30 hours <br /> 
                    Charging time — 2.5 hours <br /> 
                    Wireless range — 15 m <br />
                    Plug type — 3.5 mm<br />`,
    },
  ];

  function productInfoClick(ev) {
    const productId = ev.target.dataset.id;
    const product = products.find((product) => product.id === productId);
    localStorage.product = JSON.stringify(product);
  }

  function renderProducts(products) {
    const productsFeatured = document.querySelector(
      ".product-tabs__tab-featured"
    );
    productsFeatured.innerHTML = "";
    const productsSale = document.querySelector(".product-tabs__tab-sale");
    productsSale.innerHTML = "";
    const productsNew = document.querySelector(".product-tabs__tab-new");
    productsNew.innerHTML = "";

    for (const product of products) {
      if (parseInt(product.id) <= 4) {
        // Change this condition based on your needs
        productsFeatured.innerHTML += `
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
      if (parseInt(product.id) > 4 && parseInt(product.id) <= 8) {
        // Change this condition based on your needs
        productsSale.innerHTML += `
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
      if (parseInt(product.id) > 8 && parseInt(product.id) <= 12) {
        // Change this condition based on your needs
        productsNew.innerHTML += `
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
    }
    document
      .querySelectorAll(".info-link")
      .forEach((link) => link.addEventListener("click", productInfoClick));
  }

  renderProducts(products);
})();
