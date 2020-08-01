"use strict"

$('.slider').slick({
  autoplay: true,
  autoplaySPeed: 5000,
  speed: 300,
  arrows: false,
  slidesToShow: 4,
  slidesToScroll: 1
});

$('.reviewsperson').slick({
  infinite: true,
	slidesToShow: 5,
  slidesTOScroll: 1,
  arrows: true,
  nextArrow: '<img class="arrow arrow1" src="img/icons/arrowforward.webp" alt="Previous person">',
  prevArrow: '<img class="arrow arrow2" src="img/icons/arrowback.webp" alt="Next person">',
  focusOnSelect: true
});

console.log(450 / 980 * 100);
