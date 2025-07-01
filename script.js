// Mobile Menu Toggle
const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");

menuBtn.addEventListener("click", () => {
  mainNav.classList.toggle("active");
  menuBtn.innerHTML = mainNav.classList.contains("active")
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-bars"></i>';
});

// Header Scroll Effect
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Lightbox Functions
function openLightbox(e, element) {
  e.preventDefault();
  const lightbox = document.getElementById("lightbox");
  let videoUrl = element.getAttribute("data-video");

  // Modify YouTube URL to hide controls and autoplay
  if (videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be")) {
    videoUrl = videoUrl.replace(/(\?|&)controls=\d/, ""); // Remove existing controls parameter if any
    videoUrl += (videoUrl.includes("?") ? "&" : "?") + "controls=0&autoplay=1";
  }

  document.getElementById("lightboxVideo").src = videoUrl;
  lightbox.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  document.getElementById("lightboxVideo").src = "";
  lightbox.style.display = "none";
  document.body.style.overflow = "auto";
}

// Form Submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  // Here you would typically send the form data to a server
  alert("Thank you for your message! We will get back to you soon.");
  this.reset();
});

// Intersection Observer for animations
const fadeElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = "running";
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

fadeElements.forEach((element) => {
  observer.observe(element);
});
