(function openMenu() {
  const headerMenu = document.querySelector('.header-menu');
  const menuButton = document.querySelector('.header-hamburger');

  menuButton.addEventListener('click', (e) => {
    e.preventDefault();
    menuButton.classList.toggle('open');

    if(menuButton.classList.contains('open')){
      headerMenu.classList.add('active');
    } else {
      headerMenu.classList.remove('active');
    }
  })
}) ();

(function scrollNav() {
  const header = document.querySelector('.header');
  window.onscroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
}) ();
