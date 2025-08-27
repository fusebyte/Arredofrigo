// Gestione menu espandibile Servizi

document.addEventListener('DOMContentLoaded', function() {
  var dropdowns = document.querySelectorAll('.nav-dropdown');

  dropdowns.forEach(function(dropdown) {
    var arrowSpan = dropdown.querySelector('.dropdown-arrow');
    var dropdownMenu = dropdown.querySelector('.dropdown-menu');

    arrowSpan.addEventListener('click', function(e) {
      e.stopPropagation();
      // Chiudi tutti gli altri menu
      dropdowns.forEach(function(otherDropdown) {
        if (otherDropdown !== dropdown) {
          var otherMenu = otherDropdown.querySelector('.dropdown-menu');
          var otherArrow = otherDropdown.querySelector('.dropdown-arrow');
          otherMenu.classList.remove('open');
          otherArrow.classList.remove('open');
        }
      });
      dropdownMenu.classList.toggle('open');
      arrowSpan.classList.toggle('open');
    });
  });

  // Chiudi tutti i menu se si clicca fuori
  document.addEventListener('click', function(e) {
    dropdowns.forEach(function(dropdown) {
      if (!dropdown.contains(e.target)) {
        var dropdownMenu = dropdown.querySelector('.dropdown-menu');
        var arrowSpan = dropdown.querySelector('.dropdown-arrow');
        dropdownMenu.classList.remove('open');
        arrowSpan.classList.remove('open');
      }
    });
  });
});
