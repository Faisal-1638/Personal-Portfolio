window.addEventListener('scroll', function () {
  const btn = document.querySelector('.ftop');

  if (btn) {
    btn.style.display = window.scrollY > 200 ? 'flex' : 'none';
  }
});