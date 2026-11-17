// DISPLAY TODAY'S DATE

const todayDate = document.getElementById("todayDate");

if (todayDate) {
  todayDate.textContent = new Date().toLocaleDateString("en-PH", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

// REGISTRATION FORM VALIDATION

const registrationForm = document.getElementById("registrationForm");
const formMessage = document.getElementById("formMessage");

registrationForm.addEventListener("submit", function (event) {
  event.preventDefault();
  event.stopPropagation();

  if (!registrationForm.checkValidity()) {
    registrationForm.classList.add("was-validated");

    formMessage.textContent = "Please complete the required fields.";

    formMessage.className = "small text-danger";

    return;
  }

  const studentName = document.getElementById("fullName").value.trim();

  formMessage.textContent = `Thank you, ${studentName}! Your sample registration was submitted.`;

  formMessage.className = "small text-success";

  registrationForm.classList.remove("was-validated");

  registrationForm.reset();
});

// MOBILE NAVBAR

document.querySelectorAll("#mainNavbar .nav-link").forEach(function (link) {
  link.addEventListener("click", function () {
    const navbar = document.getElementById("mainNavbar");

    if (window.innerWidth < 992 && navbar.classList.contains("show")) {
      bootstrap.Collapse.getOrCreateInstance(navbar).hide();
    }
  });
});
