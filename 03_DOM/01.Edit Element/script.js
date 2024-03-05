const paragraph = document.getElementById("demoParagraph");

const button = document.getElementById("changeTextButton");

button.addEventListener("click", function () {
  paragraph.textContent = "Text changed!";
});
