const logoButton = document.getElementById("logo-button")
const header = document.getElementById("header")
const footer = document.getElementById("footer")
const backDoc = document.getElementById("back-doc")
const rondezinp = document.querySelectorAll(".rondez-input")
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
    header.style.backgroundColor = "#1E5631"
    footer.style.backgroundColor = "#1E5631"
    logoButton.src = "img/mdi_star-crescent.png"
    backDoc.style.backgroundColor = "#4CAF7A"
    rondezinp.forEach(rondezinps => {
        rondezinps.style.color = "white"
    })
}

function applyLightMode() {
    document.body.style.backgroundColor = "white"
    document.body.style.color = "black"
    header.style.backgroundColor = "#38A169"
    footer.style.backgroundColor = "#38A169"
    logoButton.src = "img/icon-park-solid_cross-society.png"
    backDoc.style.backgroundColor = "#8DEAB9"
    rondezinp.forEach(rondezinps => {
        rondezinps.style.color = "black"
    })

}

        