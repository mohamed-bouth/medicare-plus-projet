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


const logoButton = document.getElementById("logo-button")
const header = document.getElementById("header")
const footer = document.getElementById("footer")
const backBoxs = document.querySelectorAll(".back-box")
const exBorders = document.querySelectorAll(".medecine-card")
const diponible = document.querySelectorAll(".diponible-bb")
const rondez = document.querySelectorAll(".rondez-button")
const heroup = document.getElementById("up-section")

let darkmode = localStorage.getItem("theme") === "dark";

if(darkmode) applyDarkMode();
else applyLightMode();

logoButton.addEventListener("click", () => {
    darkmode = !darkmode;
    if(darkmode) {
        applyDarkMode();
        localStorage.setItem("theme", "dark");
    } else {
        applyLightMode();
        localStorage.setItem("theme", "light");
    }
})

function applyDarkMode() {
    document.body.style.backgroundColor = "#1E1E1E"
    document.body.style.color = "#F5F5F5"
    header.style.backgroundColor = "#1E5631"
    footer.style.backgroundColor = "#1E5631"
    logoButton.src = "img/mdi_star-crescent.png"

    backBoxs.forEach(backbox => backbox.style.backgroundColor = "#4CAF7A")
    exBorders.forEach(exBorder => exBorder.style.border = "6px solid #4CAF7A")
    diponible.forEach(d => d.style.backgroundColor = "#4CAF7A")
    rondez.forEach(b => b.style.backgroundColor = "#4CAF7A")
    if(heroup) heroup.style.backgroundColor = "#1E5631"
}

function applyLightMode() {
    document.body.style.backgroundColor = "white"
    document.body.style.color = "black"
    header.style.backgroundColor = "#38A169"
    footer.style.backgroundColor = "#38A169"
    logoButton.src = "img/icon-park-solid_cross-society.png"

    backBoxs.forEach(backbox => backbox.style.backgroundColor = "#8DEAB9")
    exBorders.forEach(exBorder => exBorder.style.border = "6px solid #8DEAB9")
    diponible.forEach(d => d.style.backgroundColor = "#8DEAB9")
    rondez.forEach(b => b.style.backgroundColor = "#8DEAB9")
    if(heroup) heroup.style.backgroundColor = "#38A169"
}
