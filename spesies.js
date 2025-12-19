document.querySelectorAll(".detail-btn").forEach(button => {
  button.addEventListener("click", () => {
    const popupId = button.dataset.target;
    const popup = document.getElementById(popupId);

    if (popup) {
      popup.style.display = "flex";
    }
  });
});

document.querySelectorAll(".img-box img").forEach(image => {
  image.addEventListener("click", () => {
    const popupId = image.dataset.foto;
    const popup = document.getElementById(popupId);

    if (popup) {
      popup.style.display = "flex";
    }
  });
});

document.querySelectorAll(".close").forEach(closeBtn => {
  closeBtn.addEventListener("click", () => {
    closeBtn.closest(".popup").style.display = "none";
  });
});

window.addEventListener("click", event => {
  document.querySelectorAll(".popup").forEach(popup => {
    if (event.target === popup) {
      popup.style.display = "none";
    }
  });
});
