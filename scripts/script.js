$(document).ready(function(){

  $('.promo__burger').bind('click', function() {
  $(this).toggleClass('active');
  $(this).find('div').removeClass('no-animation');
  $(".page-header").toggle();
    });



  $('.community__list').slick({
    arrows: false,
    slidesToShow: 6,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          slidesToShow: 1,
        }
      }
    ]
  });

  $('.coach-photos__list').slick({
    arrows: false,
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          slidesToShow: 1,
        }
      }
    ]
  });


})();
