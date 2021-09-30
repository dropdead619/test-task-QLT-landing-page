const dropDownCards = document.getElementsByClassName(
  "program-dropdown-content"
);

for (card of dropDownCards) {
  let h3 = card.querySelector("h3");
  let dropDownParagraph = card.querySelector("div");
  h3.addEventListener("click", (event) => {
    if (event.target.classList.contains("active-dropdown")) {
        dropDownParagraph.style.display = "none";
        event.target.classList.toggle("active-dropdown");
        event.target.classList.toggle("disabled-dropdown");
      } else if (event.target.classList.contains("disabled-dropdown")) {
        dropDownParagraph.style.display = "block";
        event.target.classList.toggle("disabled-dropdown");
        event.target.classList.toggle("active-dropdown");
      }
  });
}
