// ВАЛИДАЦИЯ EMAIL

function validate(form_id,email) {
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  var address = document.forms[form_id].elements[email].value;
  if(reg.test(address) == false) {
    alert('Введите корректный e-mail');
    return false;
   }
}


// БУРГЕР МЕНЮ

$(document).ready(function(){

  $('.page-header__burger').on('click', function() {
  $('.main-nav').toggleClass('.active');
  $('.main-nav').toggle();
    });


// КНОПКА ВВЕРХ

  $(function() {
    $('#toTop').fadeOut();
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



// ПОСЕЩЕННЫЕ ССЫЛКИ

  // $('.main-nav__link').on('click', function() {
  // $(this).css({'color': '#900060'});
  // });



// ДОБАВЛЕНИЕ В ИЗБРАННОЕ

  $('.appartments-item__star').on('click', function() {

    if ($(this).attr('click-state') == 1) {
      $(this).attr('click-state', 0)
      $(this).css({'background-position':'-10px -10px'})
    } else {
      $(this).attr('click-state', 1)
      $(this).css({'background-position':'-50px -10px'})
    }

  });




// БРОНИРОВАНИЕ АППАРТАМЕНТОВ

  $('.appartments-item').on('click', function() {

    if ($(this).attr('click-state') == 1) {
      $(this).attr('click-state', 0)
      $(this).children('.appartments-footer').css({'background-color':'#002f2f'});
      $(this).children('.appartments-footer').children('.appartments-footer__text--free').css({'display':'block'});
      $(this).children('.appartments-footer').children('.appartments-footer__text--reserved').css({'display':'none'});
    } else {
      $(this).attr('click-state', 1)
      $(this).children('.appartments-footer').css({'background-color':'#a7a37e'});
      $(this).children('.appartments-footer').children('.appartments-footer__text--free').css({'display':'none'});
      $(this).children('.appartments-footer').children('.appartments-footer__text--reserved').css({'display':'block'});
    }

  });





})();

