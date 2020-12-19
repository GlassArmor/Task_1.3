let showButton = document.querySelector('.brands__showmore');
let hidden = document.querySelectorAll('.visually-hidden');
let status = 0;

showButton.addEventListener('click', function() {
  if ( status === 0 ) {

    for (let i = 0; i < hidden.length; i++) {
      hidden[i].classList.remove('visually-hidden');
    }

    showButton.textContent = 'Скрыть';
    showButton.classList.add('brands__showmore--reversed');
    status = 1;
  } else {

    for (let i = 0; i < hidden.length; i++) {
      hidden[i].classList.add('visually-hidden');
    }

    showButton.textContent = 'Показать все';
    showButton.classList.remove('brands__showmore--reversed');
    status = 0;
  }
});
