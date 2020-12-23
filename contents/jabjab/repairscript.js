let showButton = document.querySelector('.brands__showmore');
let container = document.querySelector('.brands__list');
let status = 0;

showButton.addEventListener('click', function() {
  if ( status === 0 ) {
    container.style.height = "auto";
    showButton.textContent = 'Скрыть';
    showButton.classList.add('brands__showmore--reversed');
    status = 1;
  } else {
    container.style.height = "205px";
    showButton.textContent = 'Показать все';
    showButton.classList.remove('brands__showmore--reversed');
    status = 0;
  }
});

let swiperContainer = document.querySelector('.to_be_swiper');
let swiperWrapper = document.querySelector('.brands__list');
let swiperItem = document.querySelectorAll('.brands__wrapper');
let pagination = document.querySelector('.swiper-pagination');

let swiper = 0;
let checker = 0;
window.addEventListener('resize', function(){
  checkSwiper();
});

function checkSwiper() {
  if ( window.innerWidth < 768 ) {

    swiperContainer.classList.add('swiper-container');
    swiperWrapper.classList.add('swiper-wrapper');
    pagination.style.display = "block";
    for (let i = 0; i < swiperItem.length; i++) {
      swiperItem[i].classList.add('swiper-slide');
    }

      swiper = new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        loop: true,
        loopedSlides: 11,
        centeredSlides: true,
        width: 256
      });
      checker = 1;
    } else {

      if (checker === 1) {
        swiper.destroy();
        checker = 0;
        showButton.textContent = 'Показать все';
        showButton.classList.remove('brands__showmore--reversed');
        status = 0;
      }
      pagination.style.display = "none";
      swiperContainer.classList.remove('swiper-container');
      swiperWrapper.classList.remove('swiper-wrapper');
      for (let i = 0; i < swiperItem.length; i++) {
        swiperItem[i].classList.remove('swiper-slide');
      }
    }
}
checkSwiper();
