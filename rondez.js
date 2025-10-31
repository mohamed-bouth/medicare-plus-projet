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
const savedAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
const appointments = savedAppointments;
renderAppointments();


const form = document.getElementById("appointmentForm");

form.addEventListener("submit" , function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const name = formData.get("name").trim();
    const email = formData.get("email").trim();
    const doctor = formData.get("doctor");
    const date = formData.get("date");

    const nameinput = document.getElementById("name-input")
    const emailinput = document.getElementById("email-input")
    const doctorinput = document.getElementById("doctor-input")
    const dateinput = document.getElementById("date-input")

    if(name === "") {
        nameinput.style.border ="1px solid rgba(255, 26, 26, 0.5)"
        return
    }else {
        nameinput.style.border ="none"
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailinput.style.border ="1px solid rgba(255, 26, 26, 0.5)"
    return;
    }else {
        emailinput.style.border ="none"
    }

    if (doctor === "none") {
        doctorinput.style.border ="1px solid rgba(255, 26, 26, 0.5)"
    return;
    }else {
        doctorinput.style.border ="none"
    }

    const today = new Date().toISOString().split("T")[0];
    if (date < today) {
        dateinput.style.border ="1px solid rgba(255, 26, 26, 0.5)"
    return;
    }else {
        dateinput.style.border ="none"
    }
    const appointment = { name, email, doctor, date };
    appointments.push(appointment);
    renderAppointments();
    localStorage.setItem("appointments", JSON.stringify(appointments));
    form.reset();
    
})


function renderAppointments() {
  const list = document.getElementById("appointmentsList");
  list.innerHTML = "";
  appointments.forEach((appointment, index) => {
    const div = document.createElement("div");
    div.classList.add("appointment-item");
    div.innerHTML = `
      <p><strong>Nom: <br></strong> ${appointment.name}</p>
      <p><strong>Email: <br></strong> ${appointment.email}</p>
      <p><strong>Médecin: <br></strong> ${appointment.doctor}</p>
      <p><strong>Date: <br></strong> ${appointment.date}</p>
      <button class="delete-btn" data-index="${index}">Supprimer</button>
    `;
    list.appendChild(div);
  });
  const deleteButtons = document.querySelectorAll(".delete-btn");
  deleteButtons.forEach(btn => {
    btn.addEventListener("click", function() {
      const index = this.getAttribute("data-index");
      appointments.splice(index, 1);
      renderAppointments();
      localStorage.setItem("appointments", JSON.stringify(appointments));
    });
  });
}








        