function toggleSidebar(x) {
  document.getElementById("sidebar").classList.toggle('active');
  x.classList.toggle("change");
}

function toggleINSidebar() {
  document.getElementById("likedin-sidebar").classList.toggle('active');
}

function scrollToWelcome(anchor) {
  var element = document.getElementById(anchor);
  element.scrollIntoView({ block: 'start',  behavior: 'smooth' });
}


/* COde to change the header when reaching skills */

function changeHeader() {
  var skills = document.getElementById('skills');
  // returns the position with respect to the window not the document
  var skillsOffsetY = skills.getBoundingClientRect().top;
  
  //TODO: change that to improve performance
  if (skillsOffsetY <= 0) {
    var name = document.getElementById('name');
    name.style.color = "#17252A";
    var toggle = document.getElementById('toggle-btn');
    var spans = toggle.getElementsByTagName('span');
    var i = 0;
    var l = spans.length;
    for (i = 0; i < l; i++)
      spans[i].style.backgroundColor = "#17252A";

  } else {
    var name = document.getElementById('name');
    name.style.color = 'white';
    var toggle = document.getElementById('toggle-btn');
    var spans = toggle.getElementsByTagName('span');
    var i = 0;
    var l = spans.length;
    for (i = 0; i < l; i++)
      spans[i].style.backgroundColor = 'white';
  }
}

function openCRModal() {
  var CRModal = document.getElementById("CRModal");
  CRModal.style.display="flex";
}

function closeCRModal() {
  var CRModal = document.getElementById("CRModal");
  CRModal.style.display="none";

}

window.addEventListener("scroll", changeHeader);


