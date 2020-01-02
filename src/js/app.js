import SimpleParallax from 'simple-parallax-js';
import 'slick-carousel';
import "./menu";

document.addEventListener('DOMContentLoaded', function(){
  const $welcomeSlider = $(".welcome__items");

  $welcomeSlider.on('init', function(event, slick, currentSlide, nextSlide) {
    const parallaxElement = document.querySelectorAll('.js-parallax');
    const parallax = new SimpleParallax(parallaxElement, {
      overflow: true,
      delay: .25,
      transition: 'cubic-bezier(0,0,0,1)'
    });
  });

  $welcomeSlider.slick({
    infinite: true,
    dots: false,
    speed: 550,
    arrows: false,
    fade: true,
    cssEase: 'linear'
    // autoplay: true,
    // autoplaySpeed: 1000
  });


  $(".service__slider-items").slick({
    infinite: false,
    dots: false,
    arrows: true,
    speed: 300,
    slidesToShow: 1,
    variableWidth: true,
    prevArrow: $('.service__button.js-prev'),
    nextArrow: $('.service__button.js-next'),
    responsive: [
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          variableWidth: false,
          fade: true
        }
      }
    ]
  });

  $(".review__items").slick({
    infinite: true,
    dots: false,
    fade: true,
    cssEase: 'linear',
    speed: 500,
    slidesToShow: 1,
    arrows: true,
    prevArrow: $('.review__button.js-prev'),
    nextArrow: $('.review__button.js-next')
  });

  const parallaxOne = document.querySelectorAll('.js-parallax.js-parallax_img-1');
  const oneParallax = new SimpleParallax(parallaxOne, {
    overflow: true,
    delay: 1.5,
    transition: 'cubic-bezier(0.68, -0.55, 0.265, 1.5)'
  });

  const parallaxTwo = document.querySelectorAll('.js-parallax.js-parallax_img-2');
  const twoParallax = new SimpleParallax(parallaxTwo, {
    overflow: true,
    delay: .6,
    transition: 'cubic-bezier(0.645, 0.045, 0.355, 1)'
  });
});
