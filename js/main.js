document.addEventListener("DOMContentLoaded", function(event) {
  var modal = document.querySelector('.modal');
  var modalBtn = document.querySelectorAll('[data-toggle=modal]');
  var closeBtn = document.querySelector('.modal__close');
  var switchModal = () => {
    modal.classList.toggle('modal--visible');
  }
  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });

  closeBtn.addEventListener('click', switchModal);
  
});

