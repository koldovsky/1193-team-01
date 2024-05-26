const slides = [
  `<article class="customer-review__slide">
            <img
              class="customer-review__slide-img"
              src="img/index.customer-review/dean-williams.webp"
              alt="Dean Williams"
            />
            <h3 class="customer-review__slide-title">Dean Williams</h3>
            <p class="customer-review__slide-text">
              “I often listen to music, and for me, first of all, it is
              important that the headphones sit comfortably on my head. In the
              Basside store, I've found exactly what I needed at a very nice
              price. The customer service also works great, and these guys
              helped me with the choice.”
            </p>
            <time class="customer-review__slide-date" datetime="2022-12-15"
              >December 15, 2022</time>
   </article>`,
  `<article class="customer-review__slide">
            <img
              class="customer-review__slide-img"
              src="img/index.customer-review/jessica-gordons.webp"
              alt="Jessica Gordons"
            />
            <h3 class="customer-review__slide-title">Jessica Gordons</h3>
            <p class="customer-review__slide-text">
              “I listen to music during my morning runs and used to use earbuds
              before, but now I decided to try headphones. To my surprise, it is
              really very convenient, the headphones do not fall off while
              running. I would also like to thank the Basside store for quality
              advice and fast delivery!”
            </p>
            <time class="customer-review__slide-date" datetime="2022-03-28"
              >March 28, 2022</time>
   </article>`,
  `<article class="customer-review__slide">
            <img
              class="customer-review__slide-img"
              src="img/index.customer-review/eric-smith.webp"
              alt="Eric Smith"
            />
            <h3 class="customer-review__slide-title">Eric Smith</h3>
            <p class="customer-review__slide-text">
              “My new wireless headphones by Sennheiser work up to 14 hours on a
              single charge, wow! I can listen to music, then participate in a
              Zoom call, and watch some videos during my working day, without
              the need to recharge the battery. Thanks to Basside for such
              high-quality and stylish headphones.”
            </p>
            <time class="customer-review__slide-date" datetime="2022-05-29"
              >May 29, 2022</time>
   </article>`,
];

let slideIdx = 0;

function renderSlide() {
  const slideContainer = document.querySelector(".customer-review__slides");
  slideContainer.innerHTML = slides[slideIdx];
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

const btnNext = document.querySelector(".customer-review__btn-prev");
btnNext.addEventListener("click", nextSlide);

const btnPrev = document.querySelector(".customer-review__btn-next");
btnPrev.addEventListener("click", prevSlide);

window.addEventListener("resize", renderSlide);
