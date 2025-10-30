const searchInput = document.getElementById("search");
const cards = document.querySelectorAll(".medecine-card");
const filterSelect = document.getElementById("filter");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();

  cards.forEach(card => {
    const name = card.querySelector("h2").textContent.toLowerCase();
    
    if (name.includes(query)) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });
});

filterSelect.addEventListener("change", () => {
  const selected = filterSelect.value.toLowerCase();

  cards.forEach(card => {
    const speciality = card.querySelector("h3").textContent.toLowerCase();
    
    if (selected === "all" || speciality.includes(selected)) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });
});