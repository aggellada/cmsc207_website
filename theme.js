const modeBtns = document.querySelectorAll(".mode");
const aboutMeContent = document.querySelector(".about_me_content");
const burger = document.getElementById("burger");
const navLinks = document.getElementById("burger_links");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark-grid");
  document.body.classList.remove("light-grid");
} else {
  document.body.classList.add("light-grid");
  document.body.classList.remove("dark-grid");
}

// TOGGLE THEME
modeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-grid");
    document.body.classList.toggle("light-grid");

    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
});

burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

function sendMail(e) {
  e.preventDefault();

  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  emailjs.send("service_j65zy2a", "template_rpyfbpb", params).then(function () {
    alert("Message sent!");
    document.querySelector(".contact_form").reset();
  });
}
