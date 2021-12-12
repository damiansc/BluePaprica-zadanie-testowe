(function openMenu() {
  const headerMenu = document.querySelector('.header-menu');
  const menuButton = document.querySelector('.header-hamburger');

  menuButton.addEventListener('click', (e) => {
    e.preventDefault();
    menuButton.classList.toggle('open');

    if(menuButton.classList.contains('open')){
      headerMenu.classList.add('active');
      document.body.style.overflow = "hidden"
    } else {
      headerMenu.classList.remove('active');
      document.body.style.overflow = "unset"
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
    };
  };
}) ();
