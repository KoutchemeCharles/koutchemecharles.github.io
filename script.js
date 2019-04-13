function toggleSidebar(x) {
  document.getElementById("sidebar").classList.toggle('active');
  x.classList.toggle("change");
}

function scrollToWelcome(anchor) {
  var element = document.getElementById(anchor);
  element.scrollIntoView({ block: 'start',  behavior: 'smooth' });
}


