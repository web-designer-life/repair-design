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
});