  window.addEventListener("scroll", function () {
    const header = document.getElementById("site-header");
    if (window.scrollY > 0) {
      header.classList.add("header-scrolled");
    } else {
      header.classList.remove("header-scrolled");
    }
  });




  function toggleMobileMenu(menu){
  menu.classList.toggle('open');
}

function clearPlaceholder(input) {
  input.placeholder = '';
}

function toHeadshot(){
  window.location.href = "headshots.html"
}