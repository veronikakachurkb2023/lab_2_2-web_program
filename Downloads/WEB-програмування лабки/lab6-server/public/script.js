// ===== SYSTEM INFO IN FOOTER =====
const browserInfo = {
  userAgent: navigator.userAgent,
  platform: navigator.platform,
  language: navigator.language
};

localStorage.setItem("systemInfo", JSON.stringify(browserInfo));

const savedInfo = JSON.parse(localStorage.getItem("systemInfo"));
const footer = document.querySelector("footer");

if (footer && savedInfo) {
  footer.innerHTML += `
    <div class="system-info">
      <p><strong>Browser:</strong> ${savedInfo.userAgent}</p>
      <p><strong>Platform:</strong> ${savedInfo.platform}</p>
      <p><strong>Language:</strong> ${savedInfo.language}</p>
    </div>
  `;
}


// ===== REVIEWS FROM SERVER =====
fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("reviews-container");

    if (!container) return;

    data.forEach(comment => {
      const div = document.createElement("div");
      div.classList.add("review-card");

      div.innerHTML = `
        <p><strong>${comment.name}</strong></p>
        <p>${comment.body}</p>
      `;

      container.appendChild(div);
    });
  })
  .catch(error => console.error("Error loading reviews:", error));


// ===== MODAL WINDOW =====
const modal = document.getElementById("modal");
const closeModal = document.getElementById("close-modal");

if (modal && closeModal) {
  setTimeout(() => {
    modal.classList.add("show");
  }, 60000);

  closeModal.addEventListener("click", () => {
    modal.classList.remove("show");
  });
}


// ===== CONTACT FORM TO NODE.JS SERVER =====
const form = document.getElementById("contact-form");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      alert(data.message);
      form.reset();
      modal.classList.remove("show");
    } catch (error) {
      console.error(error);
      alert("Error sending form");
    }
  });
}


// ===== LIGHT / DARK THEME =====
const toggleBtn = document.getElementById("theme-toggle");

function setThemeByTime() {
  const now = new Date();
  const hours = now.getHours();

  if (hours >= 7 && hours < 21) {
    document.body.classList.remove("dark-mode");
  } else {
    document.body.classList.add("dark-mode");
  }
}

setThemeByTime();

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
}