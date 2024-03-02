var navLinks= document.getElementById("navLinks");

function showmenu(){
    navLinks.style.right="0";
}   
function hidemenu(){
    navLinks.style.right="-200px";
}
let n = 0;

function slide() {
  const images = document.getElementsByClassName("img");
  const button = document.getElementsByClassName("button");

  for (let i = 0; i < images.length; i++) {
    images[i].style = "display:none";
  }
  for (let i = 0; i < button.length; i++) {
    button[i].className = button[i].className.replace(" active", "");
  }

  n++;
  if (n > images.length) {
    n = 1;
  }

  images[n - 1].style = "display:block";
  button[n - 1].className += " active";

  setTimeout(slide, 3000);
}

slide();

// CREDIT: https://w3schools.com - HOW TO SECTION
