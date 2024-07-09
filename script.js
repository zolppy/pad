const botaoDo = document.querySelector(".do");
const botaoRe = document.querySelector(".re");
const botaoMi = document.querySelector(".mi");
const botaoFa = document.querySelector(".fa");
const botaoSol = document.querySelector(".sol");
const botaoLa = document.querySelector(".la");
const botaoSi = document.querySelector(".si");
const botaoDo2 = document.querySelector(".do2");
const botaoRe2 = document.querySelector(".re2");
const okButton = document.querySelector(".ok");
const corpo = document.querySelector("body");

botaoDo.addEventListener("click", () => {
  const audio = new Audio("songs/1do.mp3");
  audio.play();
});

botaoRe.addEventListener("click", () => {
  const audio = new Audio("songs/1re.mp3");
  audio.play();
});

botaoMi.addEventListener("click", () => {
  const audio = new Audio("songs/1mi.mp3");
  audio.play();
});

botaoFa.addEventListener("click", () => {
  const audio = new Audio("songs/1fa.mp3");
  audio.play();
});

botaoSol.addEventListener("click", () => {
  const audio = new Audio("songs/1sol.mp3");
  audio.play();
});

botaoLa.addEventListener("click", () => {
  const audio = new Audio("songs/1la.mp3");
  audio.play();
});

botaoSi.addEventListener("click", () => {
  const audio = new Audio("songs/1si.mp3");
  audio.play();
});

botaoDo2.addEventListener("click", () => {
  const audio = new Audio("songs/2do.mp3");
  audio.play();
});

botaoRe2.addEventListener("click", () => {
  const audio = new Audio("songs/2re.mp3");
  audio.play();
});

corpo.addEventListener("keypress", (event) => {
  const tecla = event.key;

  switch (tecla) {
    case "7":
      botaoDo.click();
      botaoDo.style.backgroundColor = "blue";
      setTimeout(() => {
        botaoDo.style.backgroundColor = "inherit";
      }, 200);
      break;
    case "8":
      botaoRe.click();
      botaoRe.style.backgroundColor = "red";
      setTimeout(() => {
        botaoRe.style.backgroundColor = "inherit";
      }, 200);
      break;
    case "9":
      botaoMi.click();
      botaoMi.style.backgroundColor = "blue";
      setTimeout(() => {
        botaoMi.style.backgroundColor = "inherit";
      }, 200);
      break;
    case "4":
      botaoFa.click();
      botaoFa.style.backgroundColor = "red";
      setTimeout(() => {
        botaoFa.style.backgroundColor = "inherit";
      }, 200);
      break;
    case "5":
      botaoSol.click();
      botaoSol.style.backgroundColor = "green";
      setTimeout(() => {
        botaoSol.style.backgroundColor = "inherit";
      }, 200);
      break;
    case "6":
      botaoLa.click();
      botaoLa.style.backgroundColor = "red";
      setTimeout(() => {
        botaoLa.style.backgroundColor = "inherit";
      }, 200);
      break;
    case "1":
      botaoSi.click();
      botaoSi.style.backgroundColor = "blue";
      setTimeout(() => {
        botaoSi.style.backgroundColor = "inherit";
      }, 200);
      break;
    case "2":
      botaoDo2.click();
      botaoDo2.style.backgroundColor = "red";
      setTimeout(() => {
        botaoDo2.style.backgroundColor = "inherit";
      }, 200);
      break;
    case "3":
      botaoRe2.click();
      botaoRe2.style.backgroundColor = "blue";
      setTimeout(() => {
        botaoRe2.style.backgroundColor = "inherit";
      }, 200);
  }
});

okButton.addEventListener("click", function () {
  const father = this.closest(".tutorial");

  father.style.display = "none";
});
