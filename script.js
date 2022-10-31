var btnSearch = document.querySelector('.search-box__btn');
var searchbox = document.querySelector('.search-box');
// btnSearch.addEventListener('click', function () {
//   searchbox.classList.toggle('open');
// });
btnSearch.addEventListener('click', function () {
  this.parentElement.classList.toggle('open');
  this.previousElementSibling.focus();
});
