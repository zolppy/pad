const notes = document.querySelectorAll(".tile");
const body = document.querySelector("body");
const okButton = document.querySelector(".ok");

const paths = [
  "songs/do.mp3",
  "songs/re.mp3",
  "songs/mi.mp3",
  "songs/fa.mp3",
  "songs/sol.mp3",
  "songs/la.mp3",
  "songs/si.mp3",
  "songs/do2.mp3",
  "songs/re2.mp3",
];

const colors = [
  "blue",
  "red",
  "blue",
  "red",
  "green",
  "red",
  "blue",
  "red",
  "blue",
];

const keys = ["7", "8", "9", "4", "5", "6", "1", "2", "3"];

notes.forEach((note, index) => {
  note.addEventListener("click", () => {
    new Audio(paths[index]).play();
    effect(note, colors[index]);
  });
});

const effect = (note, color) => {
  note.style.backgroundColor = color;

  setTimeout(() => {
    note.style.backgroundColor = "inherit";
  }, 200);
};

body.addEventListener("keypress", (event) => {
  const key = event.key;

  keys.forEach((item, index) => {
    if (item === key) {
      notes[index].click();
      effect(notes[index]);
    }
  });
});

okButton.addEventListener("click", function () {
  const father = this.closest(".tutorial");

  father.style.display = "none";
});
