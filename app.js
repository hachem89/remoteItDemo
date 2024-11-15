const smileBtn = document.querySelector(".smile");
const blankBtn = document.querySelector(".blank");
const tiredBtn = document.querySelector(".tired");
const chat1 = document.querySelector(".chat1");
const chat2 = document.querySelector(".chat2");
const chat3 = document.querySelector(".chat3");
const chat4 = document.querySelector(".chat4");

const chatBtn = document.querySelector(".show-btn");

chatBtn.addEventListener("click", () => {
  if (
    chat1.style.display == "block" ||
    chat2.style.display == "block" ||
    chat3.style.display == "block" ||
    chat4.style.display == "block"
  ) {
    chat1.style.display = "none";
    chat2.style.display = "none";
    chat3.style.display = "none";
    chat4.style.display = "none";
  } else {
    chat1.style.display = "block";
  }
});

smileBtn.addEventListener("click", () => {
  chat1.style.display = "none";
  chat2.style.display = "block";
});

blankBtn.addEventListener("click", () => {
  chat1.style.display = "none";
  chat3.style.display = "block";
});
tiredBtn.addEventListener("click", () => {
  chat1.style.display = "none";
  chat4.style.display = "block";
});
