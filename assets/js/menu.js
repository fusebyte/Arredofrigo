// Gestione menu espandibile Servizi

document.addEventListener('DOMContentLoaded', function() {
  var serviziDropdown = document.querySelector('.nav-dropdown');
  var arrowSpan = serviziDropdown.querySelector('.dropdown-arrow');
  var dropdownMenu = serviziDropdown.querySelector('.dropdown-menu');

  function openMenu() {
    dropdownMenu.classList.add('open');
    arrowSpan.classList.add('open');
  }
  function closeMenu() {
    dropdownMenu.classList.remove('open');
    arrowSpan.classList.remove('open');
  }

  //arrowSpan.addEventListener('mouseenter', openMenu);
  //arrowSpan.addEventListener('mouseleave', closeMenu);
  arrowSpan.addEventListener('click', function(e) {
    e.stopPropagation();
    dropdownMenu.classList.toggle('open');
    arrowSpan.classList.toggle('open');
  });

  // Chiudi il menu se si clicca fuori
  document.addEventListener('click', function(e) {
    if (!serviziDropdown.contains(e.target)) {
      closeMenu();
    }
  });
});
