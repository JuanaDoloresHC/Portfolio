document.addEventListener("DOMContentLoaded", function(event) {
  bindEvents();
});

function bindEvents() {
  const menuButton = document.getElementsByClassName("btnMenu")[0];
  const closeMenuButton = document.getElementsByClassName("close-menu-button")[0];
  menuButton.addEventListener("click", onMenuButtonClicked);
  closeMenuButton.addEventListener("click", onCloseMenuButtonClicked);
}

function onMenuButtonClicked() {
  const menu = document.getElementsByClassName("menu-container")[0];
  menu.classList.add("displayed");
}

function onCloseMenuButtonClicked() {
  const menu = document.getElementsByClassName("menu-container")[0];
  menu.classList.remove("displayed");
}

var sliderTime = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("subasnetSlider");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  sliderTime++;
  if (sliderTime > x.length) {
    sliderTime = 1
  }    
  if (sliderTime && x[sliderTime-1]) {
    x[sliderTime-1].style.display = "block"; 
  }
  setTimeout(carousel, 1000);
}
