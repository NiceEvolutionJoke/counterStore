document.querySelector('.header__burger').addEventListener('click', function () {
   document.querySelector('.header__burger').classList.toggle('active');
   document.querySelector('.header__burger-block').classList.toggle('active');
   document.querySelector('body').classList.toggle('lock');
});

const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
   window.addEventListener('scroll', animOnScroll);
   function animOnScroll() {
      for (let index = 0; index < animItems.length; index++) {
         const animItem = animItems[index];
         const animItemHeight = animItem.offsetHeight;
         const animItemOffset = offset(animItem).top;
         const animStart = 4;

         let animItemPoint = window.innerHeight - animItemHeight / animStart;
         if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
         }

         if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
            animItem.classList.add('_active');
         } else {
            if (!animItem.classList.contains('_anim-no-hide')) {
               animItem.classList.remove('_active');
            }
         }
      }
   }
   function offset(el) {
      const rect = el.getBoundingClientRect(),
         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
         scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
   }

   setTimeout(() => {
      animOnScroll();
   }, 300);
}

const mySwiper = new Swiper('.product__slider', {
   slidesPerView: 1,
   spaceBetween: 30,
   slidesPerGroup: 1,
   breakpoints: {
      992: {
         slidesPerView: 1,
         slidesPerGroup: 1,
      },
   }
});
const mySwiperThree = new Swiper('.product__slider-2', {
   loop: true,
   slidesPerView: 3,
   slideToClickedSlide: true,
   spaceBetween: 15,
   slidesPerGroup: 1,
   direction: 'vertical',
   thumbs: {
      swiper: {
         el: '.product__slider',
         slidesPerView: 1,
         spaceBetween: 30,
         slidesPerGroup: 1,
      }
   }
});


const mySwiperFour = new Swiper('.products__slider', {
   loop: true,
   slidesPerView: 4,
   slideToClickedSlide: true,
   spaceBetween: 30,
   slidesPerGroup: 1,
   breakpoints: {
      992: {
         slidesPerView: 4,
         slidesPerGroup: 1,
      },
      767: {
         slidesPerView: 3,
         slidesPerGroup: 1,
      },
      500: {
         slidesPerView: 2,
         slidesPerGroup: 1,
      },
      200: {
         slidesPerView: 1,
         slidesPerGroup: 1,
      },
   }
});

const swiperPrevFour = document.getElementById('swiperPrev2')
const swiperNextFour = document.getElementById('swiperNext2')

swiperPrevFour.addEventListener('click', () => {
   mySwiperFour.slidePrev();
})
swiperNextFour.addEventListener('click', () => {
   mySwiperFour.slideNext();
})

const mySwiperTwo = new Swiper('.articles__slider', {
   loop: true,
   slidesPerView: 3,
   slideToClickedSlide: true,
   spaceBetween: 30,
   slidesPerGroup: 1,
   breakpoints: {
      992: {
         slidesPerView: 3,
         slidesPerGroup: 1,
      },
      767: {
         slidesPerView: 2,
         slidesPerGroup: 1,
      },
      500: {
         slidesPerView: 2,
         slidesPerGroup: 1,
      },
      200: {
         slidesPerView: 1,
         slidesPerGroup: 1,
      },
   }
});

const swiperPrevTwo = document.getElementById('swiperPrev')
const swiperNextTwo = document.getElementById('swiperNext')

swiperPrevTwo.addEventListener('click', () => {
   mySwiperTwo.slidePrev();
})
swiperNextTwo.addEventListener('click', () => {
   mySwiperTwo.slideNext();
})
