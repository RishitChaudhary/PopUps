let popupC1 = document.querySelector(".popup-container.a");
let popupC2 = document.querySelector(".popup-container.b");
let popupC3 = document.querySelector(".popup-container.c");
let popup1 = document.querySelector(".popup.a");
let popup2 = document.querySelector(".popup.b");
let popup3 = document.querySelector(".popup.c");
let close = document.querySelectorAll(".close");

let buttons = [popup1, popup2, popup3];
buttons.forEach((element) => {
  element.addEventListener("click", function () {
    if (element.classList[1] == "a") {
      popup1.style.opacity = "0";
      popup2.style.opacity = "0";
      popup3.style.opacity = "0";
      popupC1.style.transform = "scale(1)";
    }
    if (element.classList[1] == "b") {
      popup1.style.opacity = "0";
      popup2.style.opacity = "0";
      popup3.style.opacity = "0";
      popupC2.style.transform = "scale(1)";
    }
    if (element.classList[1] == "c") {
      popup1.style.opacity = "0";
      popup2.style.opacity = "0";
      popup3.style.opacity = "0";
      popupC3.style.transform = "scale(1)";
    }
  });
});

close.forEach((element) => {
  element.addEventListener("click", function () {
    popupC1.style.transform = "scale(0)";
    popupC2.style.transform = "scale(0)";
    popupC3.style.transform = "scale(0)";
    popup1.style.opacity = "1";
    popup2.style.opacity = "1";
    popup3.style.opacity = "1";
  });
});

document.onkeydown = function (evt) {
  evt = evt || window.event;
  if (evt.key == "Escape") {
    close.forEach((element) => {
      element.click();
    });
  }
};
