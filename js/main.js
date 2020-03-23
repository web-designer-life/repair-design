/*
document.addEventListener("DOMContentLoaded", function(event) {
  var modal = document.querySelector('.modal');
  var input = document.querySelector('.modal input[type=text]');
  var modalBtn = document.querySelectorAll('[data-toggle=modal]');
  var closeBtn = document.querySelector('.modal__close');
  var switchModal = function() {
    modal.classList.toggle('modal--visible');
    input.focus();
  };
  
  modalBtn.forEach(function(element) {
    element.addEventListener('click', switchModal);
  });

  closeBtn.addEventListener('click', switchModal);

  window.onclick = function (event) {
    if(event.target == modal) {
      modal.classList.toggle('modal--visible');
    }
  };

  window.addEventListener('keydown', function(event){
    if (event.key === 'Escape'){
      modal.classList.remove('modal--visible');
    }
  });
});
*/

$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close'),
      input = $('.modal input[type=text]'),
      switchModal = function() {
        modal.toggleClass('modal--visible'),
        input.focus();   
      };

  modalBtn.on('click', switchModal);

  closeBtn.on('click', function () {
    modal.removeClass('modal--visible');
  });

  modal.keyup(function(event) {
      if (event.key === 'Escape') {
        modal.removeClass('modal--visible');
      }
  });
  
  modal.on('click', function (event) {
    if (modal.has(event.target).length == 0) {
      modal.toggleClass('modal--visible');
    }
  });
 
  $(window).scroll(function(){
  if ($(this).scrollTop() > 100) {
  $('.scrollup').fadeIn();
  } else {
  $('.scrollup').fadeOut();
  }
  });
  
  $('.scrollup').click(function(){
  $("html, body").animate({ scrollTop: 0 }, 600);
  return false;
  });

  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var nextBtn = $('.swiper-button-next');
  var prevBtn = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  nextBtn.css('left', prevBtn.width() + 10 + bullets.width() + 10);
  bullets.css('left', prevBtn.width() + 10);

  new WOW().init();

  $(window).scroll(function() {
    $('.right').each(function() {
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow + 900) {
        $(this).addClass('wow');
        $(this).addClass('fadeInRight');
      }
    });
  });

  // Валидация формы
  $('.modal__form').validate({
    errorClass: "invalid",
    ignore: ":disabled",
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      // правило-объект (блок)
      userEmail: {
        required: true,
        email: true
      }
    }, // сообщения
    errorElement: 'div',
    messages: {
      userName: {
        required: "Заполните поле: Имя",
        minlength: "Имя должно быть не короче 2 букв",
        maxlength: "Имя может иметь максимум 15 букв"
      },
      userPhone: "Заполните поле: Телефон",
      userEmail: {
        required: "Заполните поле: Email",
        email: "Введите корректный email (формат: name@domain.com)"
      }
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          //alert('Форма отправлена, мы свяжемся с вами через 10 минут');
          $(form)[0].reset();
          $('.modal__form').css('display', 'none');
          $('.modal__title').html('Форма отправлена, мы свяжемся с вами через 10 минут<br><br> Советую подписаться на нашу<br><a class="modal-success__link" href="#">группу Вконтакте</a>');
          $('.modal__title').css('margin', 'auto');
          $('.modal__title').css('display', 'flex');
          $('.modal__title').css('flex-direction', 'column');
          $('.modal__title').css('align-items', 'center');
          $('.modal__title').css('justify-content', 'center');
          $('.modal-success__link').css('color', '#E3B873');
        },
        error: function(response) {
          console.error('Ошибка запроса ' + response);
        }
      });
    }
  });

  $('.footer__form').validate({
    errorClass: "invalid",
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      // правило-объект (блок)
      userQuestion: {
        required: true
      }
    }, // сообщения
    errorElement: 'div',
    messages: {
      userName: {
        required: "Заполните поле: Имя",
        minlength: "Имя должно быть не короче 2 букв",
        maxlength: "Имя может иметь максимум 15 букв"
      },
      userPhone: "Заполните поле: Телефон",
      userQuestion: {
        required: "Заполните поле: Вопрос"
      }
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          alert('Форма отправлена, мы свяжемся с вами через 10 минут');
          $(form)[0].reset();
        },
        error: function(response) {
          console.error('Ошибка запроса ' + response);
        }
      });
    }
  });

  $('.control__form').validate({
    errorClass: "invalid",
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required"
    }, // сообщения
    errorElement: 'div',
    messages: {
      userName: {
        required: "Заполните поле: Имя",
        minlength: "Имя должно быть не короче 2 букв",
        maxlength: "Имя может иметь максимум 15 букв"
      },
      userPhone: "Заполните поле: Телефон"
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          alert('Форма отправлена, мы свяжемся с вами через 10 минут');
          $(form)[0].reset();
        },
        error: function(response) {
          console.error('Ошибка запроса ' + response);
        }
      });
    }
  });

  // маска для телефона
  $('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "+7 (___) ___-__-__"});
  
  // создание яндекс карты
  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [47.244729, 39.723187],
            zoom: 17,
            controls: ["zoomControl"]
        }, {
            searchControlProvider: 'yandex#search',
            suppressMapOpenBlock: true
        }),

    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),

    myPlacemark = new Placemark(myMap.getCenter(), {
        hintContent: 'Наш офис',
        balloonContent: 'Вход со двора'
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: 'img/marker.png',
        // Размеры метки.
        iconImageSize: [32, 32],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-5, -38]
    });

    myMap.behaviors
      .disable(['drag', 'rightMouseButtonMagnifier', 'scrollZoom']);
      
    myMap.geoObjects
      .add(myPlacemark);
  });
});