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


const logoButton = document.getElementById("logo-button")
const header = document.getElementById("header")
const footer = document.getElementById("footer")
const train = document.querySelectorAll(".opi-card")
const box = document.getElementById("box")
const inputbar = document.getElementById("bonga")
const search = document.querySelectorAll(".option-search")
let darkmode = localStorage.getItem("theme") === "dark";

if(darkmode) {
    applyDarkMode();
} else {
    applyLightMode();
}

if (logoButton) {
    logoButton.addEventListener("click", () => {
        darkmode = !darkmode;
        if(darkmode) {
            applyDarkMode();
            localStorage.setItem("theme", "dark");
        } else {
            applyLightMode();
            localStorage.setItem("theme", "light");
        }
    });
}

function applyDarkMode() {
    document.body.style.backgroundColor = "#1E1E1E"
    document.body.style.color = "#F5F5F5"
    if(header) header.style.backgroundColor = "#1E5631"
    if(footer) footer.style.backgroundColor = "#1E5631"
    train.forEach(card => card.style.backgroundColor = "#4CAF7A");
    if(box) box.style.backgroundColor = "#4CAF7A"
    if(inputbar) {
        inputbar.style.backgroundColor = "#1E1E1E"
        inputbar.style.color = "#F5F5F5"
    }
    search.forEach(serchs => {
        serchs.style.backgroundColor = "#1E1E1E";
    });
    if(logoButton) logoButton.src = "img/mdi_star-crescent.png"
    
}

function applyLightMode() {
    document.body.style.backgroundColor = "white"
    document.body.style.color = "black"
    if(header) header.style.backgroundColor = "#38A169"
    if(footer) footer.style.backgroundColor = "#38A169"
    train.forEach(card => card.style.backgroundColor = "#8DEAB9");
    if(box) box.style.backgroundColor = "#8DEAB9"
    if(inputbar) {
        inputbar.style.backgroundColor = "white"
        inputbar.style.color = "gray"
    }
    search.forEach(serchs => {
        serchs.style.backgroundColor = "white";
    });
    if(logoButton) logoButton.src = "img/icon-park-solid_cross-society.png"
}




