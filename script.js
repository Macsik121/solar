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
  centerMode: true,
  centerPadding: '48px',
  infinite: true,
	slidesToShow: 3,
  slidesTOScroll: 1,
  arrows: true,
  nextArrow: '<img class="arrow arrow1" src="arrowforward.webp" alt="Previous person">',
  prevArrow: '<img class="arrow arrow2" src="arrowback.webp" alt="Next person">',
});
