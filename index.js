const searchInput2 = document.getElementById("bonga");
const drname = document.querySelectorAll(".option-search-nam");
const bar = document.getElementById("option-search");

searchInput2.addEventListener("input", () => {
  const text = searchInput2.value.toLowerCase().trim();

  if (text === "") {
    drname.forEach(card => card.classList.remove("show"));
    bar.classList.remove("show");
    return;
  }

  let anyMatch = false; 

  drname.forEach(drnames => {
    const drnm = drnames.textContent.toLowerCase();
    if (drnm.includes(text)) {
      drnames.classList.add("show");
      anyMatch = true;
    } else {
      drnames.classList.remove("show");
    }
  });

  if (anyMatch) {
    bar.classList.add("show");
  } else {
    bar.classList.remove("show");
  }
});



