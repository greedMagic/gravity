// import SimpleParallax from 'simple-parallax-js';
import 'slick-carousel';

document.addEventListener('DOMContentLoaded', function(){
  const $welcomeSlider = $(".welcome__items");

  // $welcomeSlider.on('init', function(event, slick, currentSlide, nextSlide) {
  //   const parallaxElement = document.querySelectorAll('.js-parallax');
  //   const parallax = new SimpleParallax(parallaxElement, {
  //     overflow: true,
  //     delay: .25,
  //     transition: 'cubic-bezier(0,0,0,1)'
  //   });
  // });

  $welcomeSlider.slick({
    infinite: true,
    dots: false,
    speed: 300,
    arrows: false,
    // draggable: false,
    fade: true,
    // autoplay: true,
    // autoplaySpeed: 1000
  });

  // const modal = document.querySelectorAll('.modal-img');
  // const modalParallax = new SimpleParallax(modal, {
  //   overflow: true,
  //   delay: .5
  // });

  $(".service__slider-items").slick({
    infinite: false,
    dots: false,
    speed: 300,
    slidesToShow: 1,
    arrows: false,
    variableWidth: true
  });
});
