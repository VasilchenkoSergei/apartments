// БУРГЕР МЕНЮ

$(document).ready(function(){
  $('.page-header__burger').on('click', function() {
  $('.main-nav').toggleClass('.active');
  $('.main-nav').toggle();
});


// КНОПКА ВВЕРХ

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



// ПОСЕЩЕННЫЕ ССЫЛКИ

$('.main-nav__link').on('click', function() {
$(this).css({'color': '#900060'});
});

$('.footer-form__btn').on('click', function() {
$(this).css({'background-color': '#000'});
});



// ДОБАВЛЕНИЕ В ИЗБРАННОЕ

$('body').on('click', '.appartments-item__star', function() {
  if ($(this).attr('click-state') == 1) {
    $(this).attr('click-state', 0)
    $(this).css({'background-position':'-10px -10px'})
  } else {
    $(this).attr('click-state', 1)
    $(this).css({'background-position':'-50px -10px'})
  }
});

// БРОНИРОВАНИЕ АППАРТАМЕНТОВ

$('body').on('click', '.appartments-item', function() {
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

});

// ВАЛИДАЦИЯ EMAIL

function validate(form_id,email) {
  let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  let address = document.forms[form_id].elements[email].value;
  if(reg.test(address) == false) {
    alert('Введите корректный e-mail');
    return false;
   }
};

// КНОПКА ПОКАЗАТЬ ЕЩЕ

document.querySelector('.main-page__button').onclick = function() {

  let showMore = function(data) {
    let list = $('.appartments')
    
    data.forEach(item => {
      let card =
        `<article class="appartments-item" tabindex="0">
          <div class="appartments-item__img-wrap">
            <img src="${item.img}" alt="план квартиры" class="appartments-item__img" title="${item.name}">
          </div>
          <h2 class="appartments-item__title">${item.name}</h2>
          <div class="appartments-item__characters  characters">
            <div class="characters__line"></div>
            <div class="characters__repair">${item.decore}</div>
            <div class="characters__area  area">${item.square}<br><span class="area__text">площадь</span></div>
            <div class="characters__floor  floor">${item.floor}<br><span class="floor__text">этаж</span></div>
          </div>
          <div class="appartments-item__price">${item.price}</div>
          <div class="appartments-item__room">${item.room}</div>
          <footer class="appartments-item__footer  appartments-footer">
            <span class="appartments-footer__text--free">Свободно</span>
            <span class="appartments-footer__text--reserved">Забронировано</span>
          </footer>
          <div class="appartments-item__star"></div>
        </article>`
      list.append(card)
    })
  }

  $.ajax('https://api.myjson.com/bins/6dbie')
    .done(data => {
    showMore(data)
  })
    .fail(function() {
    alert('error');
  })

};


// СОРТИРОВКА


document.querySelector('.sorting__price').addEventListener("click", () => {
  const elements = document.querySelectorAll('.appartments-item');
  const sorted = [...elements].sort((a, b) => {
    const priceA = a.querySelector(".appartments-item__price");
    const priceB = b.querySelector(".appartments-item__price");
    const getPrice = (el) => parseInt(el.innerHTML.replace(/ /g, ""));
    return getPrice(priceA) - getPrice(priceB);
  });
  const resultEl = document.querySelector(".appartments");
  sorted.forEach(el => resultEl.appendChild(el));
});

document.querySelector('.sorting__room').addEventListener("click", () => {
  const elements = document.querySelectorAll('.appartments-item');
  const sorted = [...elements].sort((a, b) => {
    const roomA = a.querySelector(".appartments-item__room");
    const roomB = b.querySelector(".appartments-item__room");
    const getRoom = (el) => el.innerHTML;
    return getRoom(roomA) - getRoom(roomB);
  });
  const resultEl = document.querySelector(".appartments");
  sorted.forEach(el => resultEl.appendChild(el));
});