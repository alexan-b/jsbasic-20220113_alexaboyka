function initCarousel() {
  // ваш код...
 
  let carouselSlide = document.getElementsByClassName('carousel__slide');
  let countSlides = 0; 
  let numSlide = 0;
  let marginSlider = 0;
  let carouselInner = document.querySelector('.carousel__inner');
  let carouselImg = document.querySelector('.carousel__img');
  //находим элементы стрелок переключения
  let rightArrowBut = document.querySelector('.carousel__arrow_right');
  let leftArrowBut = document.querySelector('.carousel__arrow_left');
  //посчитаем количество картинок в карусели
  Array.from(carouselSlide).forEach(element => 
    countSlides += 1
  );
 
  //функция для отображения стрелок
  let checkArrows = function () {
    rightArrowBut.style.display = (numSlide === countSlides - 1) ? 'none' : '';
    leftArrowBut.style.display = numSlide === 0 ? 'none' : '';
  };
  //функция для пролистывания вправо
  let rightArrowClick = function () {
    marginSlider += carouselImg.offsetWidth;
    carouselInner.style.transform = `translateX(-${marginSlider}px)`;
    numSlide += 1;
    checkArrows();
  };
  //функция для пролистывания влево
  let leftArrowClick = function () {
    marginSlider -= carouselImg.offsetWidth;
    carouselInner.style.transform = `translateX(-${marginSlider}px)`;
    numSlide -= 1;
    checkArrows();
  };
  
  checkArrows();
  rightArrowBut.addEventListener('click', rightArrowClick);
  leftArrowBut.addEventListener('click', leftArrowClick);
}