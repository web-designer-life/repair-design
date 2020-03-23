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

  var spinner = $('.map-container').children('.loader');
  var check_if_load = false;
  var myMapTemp, myPlacemarkTemp;

  function init() {
    var myMapTemp = new ymaps.Map("map", {
      center: [47.244729, 39.723187], 
      zoom: 17, 
      controls: ['zoomControl'] 
    });
    var myPlacemarkTemp = new ymaps.Placemark([47.244729, 39.723187], {
      balloonContent: "офис 2112",
    }, {
      iconLayout: 'default#image',
      iconImageHref: 'img/map-mark.png',
      iconImageSize: [32, 32],
      iconImageOffset: [-16, -32],
    });
    myMapTemp.behaviors.disable('scrollZoom');
    myMapTemp.geoObjects.add(myPlacemarkTemp);

    var layer = myMapTemp.layers.get(0).get(0);
    waitForTilesLoad(layer).then(function () {
      spinner.removeClass('is-active');
    });
  }

  function waitForTilesLoad(layer) {
    return new ymaps.vow.Promise(function (resolve, reject) {
      var tc = getTileContainer(layer),
        readyAll = true;
      tc.tiles.each(function (tile, number) {
        if (!tile.isReady()) {
          readyAll = false;
        }
      });
      if (readyAll) {
        resolve();
      } else {
        tc.events.once("ready", function () {
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

  function loadScript(url, callback) {
    var script = document.createElement("script");
    if (script.readyState) { // IE
      script.onreadystatechange = function () {
        if (script.readyState == "loaded" ||
          script.readyState == "complete") {
          script.onreadystatechange = null;
          callback();
        }
      };
    } else {
      script.onload = function () {
        callback();
      };
    }
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  }

  var ymap = function () {
    $('.map-container').mouseenter(function () {
      if (!check_if_load) {
        check_if_load = true;
        spinner.addClass('is-active');
        loadScript("https://api-maps.yandex.ru/2.1/?apikey=413c87fc-f285-4212-abc8-c324c98ec8c8&lang=ru_RU&amp;loadByRequire=1", function () {
          ymaps.load(init);
        });
      }
    });
  };

  $(function () {
    ymap();
  });

  $(function () {
    $('ul.stylisation__list').on('click', 'li:not(.active)', function () {
      $(this).addClass('active').siblings().removeClass('active');
      $('[data-tab-1]').find('div.tabs__content').removeClass('tabs--active').eq($(this).index()).addClass('tabs--active');
      $('[data-tab-2]').find('div.tabs__content').removeClass('tabs--active').eq($(this).index()).addClass('tabs--active');
    });
  });

});