(function dropdown() {
  const dropdownTriggers = document.querySelectorAll('.dropdown-trigger');
  
  dropdownTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      trigger.parentElement.classList.toggle('active')
    })
  })
}) ();
