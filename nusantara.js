// Accordion
document.querySelectorAll(".accordion-header").forEach(header => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;

    document.querySelectorAll(".accordion-content").forEach(c => {
      if (c !== content) c.style.display = "none";
    });

    content.style.display =
      content.style.display === "block" ? "none" : "block";
  });
});

// Popup gambar
const popup = document.getElementById("popup");
const popupText = document.getElementById("popup-text");

document.querySelectorAll(".fn-card").forEach(card => {
  card.addEventListener("click", () => {
    popupText.textContent = card.dataset.text;
    popup.style.display = "flex";
  });
});

document.querySelector(".close").onclick = () => {
  popup.style.display = "none";
};

window.onclick = e => {
  if (e.target === popup) popup.style.display = "none";
};
