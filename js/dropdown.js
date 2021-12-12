(function dropdown() {
  const dropdownTriggers = document.querySelectorAll('.dropdown-trigger');
  const dropdownItems = document.querySelectorAll('.dropdown-data__link');

  dropdownTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      trigger.parentElement.classList.toggle('active');
    });

    dropdownItems.forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        trigger.parentElement.classList.toggle('active');
      });
    });
  });
}) ();
