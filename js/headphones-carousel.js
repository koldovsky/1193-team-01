const slides = [
         `<article class="headphones-carousel__slide" data-id="2689">
            <a href="product.html">
               <img
              class="headphones-carousel__slide-img"
              src="img/index.headphones-carousel/headphones-jbl-white.png"
              alt="JBL 334WN"
            />
            <h3 class="headphones-carousel__slide-title">JBL 334WN</h3>
            </a>
            <p class="headphones-carousel__slide-price">$140,00</p>
            <div class="headphones-carousel__slide-button">
              <button class="headphones-carousel__button-title">
                Add to cart
              </button>
            </div>
          </article>`,
         `<article class="headphones-carousel__slide" data-id="1078">
            <a href="product.html">
               <img
              class="headphones-carousel__slide-img"
              src="img/index.headphones-carousel/headphones-airpulse-blue.png"
              alt="AirPulse BB34"
            />
            <h3 class="headphones-carousel__slide-title">AirPulse BB34</h3>
            </a>
            <p class="headphones-carousel__slide-price">$112,00</p>
            <div class="headphones-carousel__slide-button">
              <button class="headphones-carousel__button-title">
                Add to cart
              </button>
            </div>
          </article>`,
          `<article class="headphones-carousel__slide" data-id="4926">
            <a href="product.html">
                <img
              class="headphones-carousel__slide-img"
              src="img/index.headphones-carousel/headphones-bangandolufsen-black.png"
              alt="Bang & Olufsen F112"
            />
            <h3 class="headphones-carousel__slide-title">
              Bang & Olufsen F112
            </h3>
            </a>
            <p class="headphones-carousel__slide-price">$145,00</p>
            <div class="headphones-carousel__slide-button">
              <button class="headphones-carousel__button-title">
                Add to cart
              </button>
            </div>
          </article>`,
          `<article class="headphones-carousel__slide" data-id="9351">
            <a href="product.html">
               <img
              class="headphones-carousel__slide-img"
              src="img/index.headphones-carousel/headphones-airpulse-pink.png"
              alt="AirPulse RS45"
            />
            <h3 class="headphones-carousel__slide-title">JBL 334WN</h3>
            </a>
            <p class="headphones-carousel__slide-price">$195,00</p>
            <div class="headphones-carousel__slide-button">
              <button class="headphones-carousel__button-title">
                Add to cart
              </button>
            </div>
          </article>`,
          `<article class="headphones-carousel__slide" data-id="8369">
            <a href="product.html">
               <img
              class="headphones-carousel__slide-img"
              src="img/index.headphones-carousel/headphonesb-sony-black.png"
              alt="Sony TT56"
            />
            <h3 class="headphones-carousel__slide-title">Sony TT56</h3>
            </a>
            <p class="headphones-carousel__slide-price">$98,00</p>
            <div class="headphones-carousel__slide-button">
              <button class="headphones-carousel__button-title">
                Add to cart
              </button>
            </div>
          </article>`,
];

let slideIdx = 0;

function renderSlide() {
  const slideContainer = document.querySelector(".headphones-carousel__slides");
  slideContainer.innerHTML = slides[slideIdx];
  if (window.matchMedia("(min-width:768px)").matches) {
    const secondSlideIdx = slideIdx + 1 >= slides.length ? 0 : slideIdx + 1;
    slideContainer.innerHTML += slides[secondSlideIdx];
    if (window.matchMedia("(min-width:980px)").matches) {
      const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
      slideContainer.innerHTML += slides[thirdSlideIdx];
      if (window.matchMedia("(min-width:1024px").matches) {
        const fourthSlideIdx = thirdSlideIdx + 1 >= slides.length ? 0 : thirdSlideIdx + 1;
        slideContainer.innerHTML += slides[fourthSlideIdx];
      }
    }
  }
}

function nextSlide() {
  slideIdx = slideIdx + 1 >= slides.length ? 0 : slideIdx + 1;
  renderSlide();
}

function prevSlide() {
  slideIdx = slideIdx - 1 < 0 ? slides.length - 1 : slideIdx - 1;
  renderSlide();
}

renderSlide();

const btnNext = document.querySelector(".headphones-carousel__btn-next");
btnNext.addEventListener("click", nextSlide);

const btnPrev = document.querySelector(".headphones-carousel__btn-prev");
btnPrev.addEventListener("click", prevSlide);

window.addEventListener("resize", renderSlide);
