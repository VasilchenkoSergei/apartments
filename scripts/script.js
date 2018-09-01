function validate(form_id,email) {
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  var address = document.forms[form_id].elements[email].value;
  if(reg.test(address) == false) {
    alert('Введите корректный e-mail');
    return false;
   }
}

$(document).ready(function(){

  $('.page-header__burger').on('click', function() {
  $('.main-nav').toggleClass('.active');
  $('.main-nav').toggle();
    });

  $(function() {
    $(window).scroll(function() {
       if($(this).scrollTop() != 0) {
          $('#toTop').fadeIn();
        } else {
          $('#toTop').fadeOut();
  }
  });

  $('#toTop').click(function() {
    $('body,html').animate({scrollTop:0},800);
    });
  });

  $('.main-nav__link').on('click', function() {
  $(this).css({'color': '#900060'});
  });




  $('.appartments-item__star').on('click', function() {
  $(this).css({'background-image':'url(img/star-dark.png)'});
  // $(this).css({'background-image':'url(img/star.png)'});
    });


 // $('.appartments-item__star').click(function() { 
 //      $(this).toggle(function() { 
 //      $(this).css({'background-image':'url(img/star-dark.png)'}); 

 //      }); 
 //     }); 

// $('.appartments-item__star').click(function() {
//     $('.appartments-item__star').toggle();
//     $(this).toggleClass('active');
//     return false;
// });

// $('.appartments-item__star').click(function() {
// $('.appartments-item__star').toggle(function () {
//     $(".appartments-item__star").addClass(".appartments-item__star--active");
// }, function () {
//     $(".appartments-item__star").removeClass(".appartments-item__star--active");
// });
// });


  $('.appartments-item').on('click', function() {
  $(this).children('.appartments-footer').css({'background-color':'#a7a37e'});
  $(this).children('.appartments-footer').children('.appartments-footer__text--free').css({'display':'none'});
  $(this).children('.appartments-footer').children('.appartments-footer__text--reserved').css({'display':'block'});
    });

  // $('.appartments-item').on('click', function() {
  // $(this).children('.appartments-footer').css({'background-color':'red'});
  // $(this).children('.appartments-footer').children('.appartments-footer__text--free').css({'display':'block'});
  // $(this).children('.appartments-footer').children('.appartments-footer__text--reserved').css({'display':'none'});
  //   });

  // $('.appartments-item').on('click', function() {
  // $(this).children('.appartments-footer').toggleClass('.appartments-footer__active');
  // $(this).children('.appartments-footer').children('.appartments-footer__text--free').toggleClass('.free--active');
  // $(this).children('.appartments-footer').children('.appartments-footer__text--reserved').toggleClass('.reserved--active');
  // $(this).toggle();
  //   });



})();

