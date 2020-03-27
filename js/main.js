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
      success = $('.success'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close'),
      successBtn = $('[data-toggle=success]'),
      close = $('.success__close'),
      input = $('.modal input[type=text]'),
      switchModal = function() {
        modal.toggleClass('modal--visible'),
        input.focus();   
      },
      switchSuccess = function() {
        success.toggleClass('success--visible');
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

  successBtn.on('click', switchSuccess);

  close.on('click', function () {
    success.removeClass('success--visible');
  });

  success.keyup(function(event) {
      if (event.key === 'Escape') {
        success.removeClass('success--visible');
      }
  });
  
  success.on('click', function (event) {
    if (success.has(event.target).length == 0) {
      success.toggleClass('success--visible');
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
  $("html, body").animate({ scrollTop: 0 }, 1500);
  return false;
  });

  $(".menu__logo").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });

  $(".nav").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });

  $('.hero__scroll-down').click(function(){
  $("html, body").animate({ scrollTop: 9999 }, 1500);
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
      },
      policyCheckbox: "required",
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
      },
      policyCheckbox: ""
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          //alert('Форма отправлена, мы свяжемся с вами через 10 минут');
          $(form)[0].reset();ym(61354918, 'reachGoal', 'form');
          modal.toggleClass('modal--visible');
          success.toggleClass('success--visible'); return true;
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
      userQuestion: "required",
      policyCheckbox: "required"
    }, // сообщения
    errorElement: 'div',
    messages: {
      userName: {
        required: "Заполните поле: Имя",
        minlength: "Имя должно быть не короче 2 букв",
        maxlength: "Имя может иметь максимум 15 букв"
      },
      userPhone: "Заполните поле: Телефон",
      userQuestion: "Заполните поле: Вопрос",
      policyCheckbox: ""
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          $(form)[0].reset();ym(61354918, 'reachGoal', 'form');
          success.toggleClass('success--visible'); return true;
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
      userPhone: "required",
      policyCheckbox: "required"
    }, // сообщения
    errorElement: 'div',
    messages: {
      userName: {
        required: "Заполните поле: Имя",
        minlength: "Имя должно быть не короче 2 букв",
        maxlength: "Имя может иметь максимум 15 букв"
      },
      userPhone: "Заполните поле: Телефон",
      policyCheckbox: ""
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          $(form)[0].reset();ym(61354918, 'reachGoal', 'form');
          success.toggleClass('success--visible'); return true;
        },
        error: function(response) {
          console.error('Ошибка запроса ' + response);
        }
      });
    }
  });

  // маска для телефона
  $('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "Ваш номер телефона:"});
  //var player;
  //$('.video__play').on('click', function onYouTubeIframeAPIReady() {
  //  player = new YT.Player('player', {
  //    height: '465',
  //    width: '100%',
  //    videoId: '8LTudha4ci8',
  //    events: {
  //      'onReady': videoPlay,
  //    }
  //  });
  //});

  //function videoPlay(event) {
  //  event.target.playVideo();
  //}

  //Переменная для включения/отключения индикатора загрузки
  var spinner = $('.ymap-container').children('.loader');
  //Переменная для определения была ли хоть раз загружена Яндекс.Карта (чтобы избежать повторной загрузки при наведении)
  var check_if_load = false;
  //Необходимые переменные для того, чтобы задать координаты на Яндекс.Карте
  var myMapTemp, myPlacemarkTemp;
  
  //Функция создания карты сайта и затем вставки ее в блок с идентификатором &#34;map-yandex&#34;
  function init () {
    var myMapTemp = new ymaps.Map("map-yandex", {
      center: [47.244729, 39.723187],
      zoom: 17,
      controls: ["zoomControl"]// выбираем только те функции, которые необходимы при использовании
    }, {
      searchControlProvider: 'yandex#search',
      suppressMapOpenBlock: true
    });
    var myPlacemarkTemp = new ymaps.Placemark([47.244729, 39.723187], {
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
    myMapTemp.geoObjects.add(myPlacemarkTemp); // помещаем флажок на карту
    myMapTemp.behaviors.disable(['rightMouseButtonMagnifier', 'scrollZoom']);
    // Получаем первый экземпляр коллекции слоев, потом первый слой коллекции
    var layer = myMapTemp.layers.get(0).get(0);
  
    // Решение по callback-у для определения полной загрузки карты
    waitForTilesLoad(layer).then(function() {
      // Скрываем индикатор загрузки после полной загрузки карты
      spinner.removeClass('is-active');
    });
  }
  
  // Функция для определения полной загрузки карты (на самом деле проверяется загрузка тайлов) 
  function waitForTilesLoad(layer) {
    return new ymaps.vow.Promise(function (resolve, reject) {
      var tc = getTileContainer(layer), readyAll = true;
      tc.tiles.each(function (tile, number) {
        if (!tile.isReady()) {
          readyAll = false;
        }
      });
      if (readyAll) {
        resolve();
      } else {
        tc.events.once("ready", function() {
          resolve();
        });
      }
    });
  }
  
  function getTileContainer(layer) {
    for (var k in layer) {
      if (layer.hasOwnProperty(k)) {
        if (
          layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer || 
          layer[k] instanceof ymaps.layer.tileContainer.DomContainer
        ) {
          return layer[k];
        }
      }
    }
    return null;
  }
  
  // Функция загрузки API Яндекс.Карт по требованию (в нашем случае при наведении)
  function loadScript(url, callback){
    var script = document.createElement("script");
    
    if (script.readyState){  // IE
      script.onreadystatechange = function(){
        if (script.readyState == "loaded" ||
                script.readyState == "complete"){
          script.onreadystatechange = null;
          callback();
        }
      };
    } else {  // Другие браузеры
      script.onload = function(){
        callback();
      };
    }
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  }
  
  // Основная функция, которая проверяет когда мы навели на блок с классом &#34;ymap-container&#34;
  var ymap = function() {
    $('.ymap-container').mouseenter(function(){
        if (!check_if_load) { // проверяем первый ли раз загружается Яндекс.Карта, если да, то загружаем
        // Чтобы не было повторной загрузки карты, мы изменяем значение переменной
          check_if_load = true; 
      // Показываем индикатор загрузки до тех пор, пока карта не загрузится
          spinner.addClass('is-active');
      // Загружаем API Яндекс.Карт
          loadScript("https://api-maps.yandex.ru/2.1/?apikey=63fd3192-612b-48d4-bf34-5f1f7b679660&lang=ru_RU", function(){
            // Как только API Яндекс.Карт загрузились, сразу формируем карту и помещаем в блок с идентификатором &#34;map-yandex&#34;
            ymaps.load(init);
          });                
        }
      }
    );  
  };
  
  $(function() {
    //Запускаем основную функцию
    ymap();
  });
});