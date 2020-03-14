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