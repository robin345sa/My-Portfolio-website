// Navigation menu toggle
const navLinks = document.getElementById("nav-links");
const menuLinks = document.getElementById("menu-links");

if (navLinks) {
  navLinks.addEventListener('click', () => {
    menuLinks.classList.add('action');
  });
}

// Scroll certifications (if you still use horizontal scroll somewhere)
function scrollCerts(value) {
  const certWrapper = document.getElementById("certWrapper");
  if (certWrapper) {
    certWrapper.scrollBy({
      left: value,
      behavior: "smooth"
    });
  }
}

// Certification slider
// List of certification images
const certs = [
  "./assets/python.png",
  "./assets/compTIA.png",
  "./assets/tryhackme.png",
  "./assets/metasploit.png"
];

let currentIndex = 0;
const certImage = document.getElementById("certImage");

// Show next certification
function nextCert() {
  if (!certImage) return;
  currentIndex = (currentIndex + 1) % certs.length; // loop back to first
  switchCert();
}

// Show previous certification
function prevCert() {
  if (!certImage) return;
  currentIndex = (currentIndex - 1 + certs.length) % certs.length; // loop to last if at first
  switchCert();
}

// Helper function for smooth transition
function switchCert() {
  certImage.style.opacity = 0;
  setTimeout(() => {
    certImage.src = certs[currentIndex];
    certImage.style.opacity = 1;
  }, 200);
}
