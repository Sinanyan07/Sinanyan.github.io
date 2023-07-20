let logo = document.querySelector(".logo");
logo.onclick = function () {
  window.location.reload();
};

let minus1 = document.querySelector(".han1");
let plus1 = document.querySelector(".gum1");
let minus2 = document.querySelector(".han2");
let plus2 = document.querySelector(".gum2");
let minus3 = document.querySelector(".han3");
let plus3 = document.querySelector(".gum3");
let minus4 = document.querySelector(".han4");
let plus4 = document.querySelector(".gum4");
let minus5 = document.querySelector(".han5");
let plus5 = document.querySelector(".gum5");
let minus6 = document.querySelector(".han6");
let plus6 = document.querySelector(".gum6");
let minus7 = document.querySelector(".han7");
let plus7 = document.querySelector(".gum7");
let minus8 = document.querySelector(".han8");
let plus8 = document.querySelector(".gum8");
let minus9 = document.querySelector(".han9");
let plus9 = document.querySelector(".gum9");
let minus10 = document.querySelector(".han10");
let plus10 = document.querySelector(".gum10");
let zr1 = document.querySelector(".zr1");
let zro = document.querySelector(".zro1");
let num1 = 0;
plus1.addEventListener("click", function anun() {
  num1++;
  if (num1 > 10) {
    num1 = 0;
  }
  zro.innerHTML = num1;
});
minus1.addEventListener("click", function anun1() {
  if (num1 > 0) {
    num1--;
    zro.innerHTML = num1;
  }
});

let num2 = 0;
plus2.addEventListener("click", function anun3() {
  num2++;
  if (num2 > 10) {
    num2 = 0;
  }
  zr1.innerHTML = num2;
});
minus2.addEventListener("click", function anun2() {
  if (num2 > 0) {
    num2--;
    zr1.innerHTML = num2;
  }
});
