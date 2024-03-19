const paragraph = document.getElementById("demoParagraph");

const button = document.getElementById("btn");

button.addEventListener("click", function () {
  paragraph.textContent = "Text changed!";
});
