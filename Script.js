// Typing animation
const nameText = "Douglas Kipruto";
const typedName = document.getElementById("typedName");
let i = 0;
function typeWriter() {
  if (i < nameText.length) {
    typedName.innerHTML += nameText.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
typeWriter();

// Back to top
window.onscroll = function () {
  document.getElementById("backToTop").style.display = window.scrollY > 200 ? "block" : "none";

  // Animate skill bars
  document.querySelectorAll(".skill-fill").forEach(skill => {
    const rect = skill.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      skill.style.width = skill.getAttribute("data-percent");
    }
  });
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Dark mode toggle
document.getElementById("darkModeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const btn = document.getElementById("darkModeToggle");
  btn.textContent = document.body.classList.contains("dark") ? "Light Mode" : "Dark Mode";
});

// Form validation
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
  } else {
    alert("Thank you for your message, " + name + "!");
    this.reset();
  }
});

function showAlert(projectName) {
  alert("You clicked on: " + projectName);
}
