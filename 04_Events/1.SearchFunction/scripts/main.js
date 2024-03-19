const inputEl = document.getElementById("userInput");

function search() {
  const result = document.getElementById("result");
  const teams = document.getElementsByTagName("li");
  let counter = 0;

  for (let index = 0; index < teams.length; index++) {
    const content = teams[index].innerHTML;
    
    if (inputEl.value && content.includes(inputEl.value)) {
        teams[index].style.fontWeight = "bold";
        counter++;
    } else {
        teams[index].style.fontWeight = "normal";
    }
  }

  if (!inputEl.value) {
    result.style.color = "red";
    result.innerHTML = "Enter value in the input.";
    inputEl.style.borderColor = "red";
  } else {
    result.style.color = "green";
    result.innerHTML = `${counter} matches found`;
    inputEl.style.borderColor = "black";
  }
}

inputEl.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    search();
  }
});