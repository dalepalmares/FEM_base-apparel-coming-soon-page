const errorIcon = document.querySelector(".error-icon");
const errorMsg = document.querySelector(".error-message");
const arrow = document.getElementById("arrow");
const email = document.querySelector(".input");

// function test() {
//   console.log(email.nodeValue);
// }

function slide() {
  arrow.classList.add("slide");
  console.log("hullo");
  setTimeout(() => {
    arrow.classList.remove("slide");
  }, 1000);
}

function test() {
  errorMsg.style.display = "none";
  errorIcon.style.display = "none";

  if (email.value.length >= 1) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
      errorMsg.style.display = "none";
      errorIcon.style.display = "none";
      slide();
    } else {
      errorMsg.style.display = "block";
      errorIcon.style.display = "block";
    }
  }
}
