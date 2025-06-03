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



  const buttons = document.querySelectorAll('.web-dev-btn');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove 'active' from all buttons
      buttons.forEach(btn => btn.classList.remove('active'));
      // Add 'active' to the clicked one
      button.classList.add('active');
    });
  });



    const webButtons = document.querySelectorAll('.web-dev-btn');
  const sections = document.querySelectorAll('.web-right');

  webButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      // Remove active from all buttons and sections
      webButtons.forEach(b => b.classList.remove('active'));
      sections.forEach(s => s.classList.remove('active'));

      // Add active to clicked button and corresponding section
      btn.classList.add('active');
      const i = btn.getAttribute('data-index');
      document.querySelector(`.web-right[data-index="${i}"]`).classList.add('active');
    });
  });