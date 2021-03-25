$(document).ready(function () {

  $('a[href^="#"]').click(function () {
    let anchor = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(anchor).offset().top
    }, 600);
  });

  $('.slider').slick({
    dots: true,
    slidesToShow: 1,
  });
});

