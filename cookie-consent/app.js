//Grab Elements
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("modal-close-btn");
const modalText = document.getElementById("modal-text");
const consentForm = document.getElementById("consent-form");

// set modal display time
setTimeout(() => {
  modal.style.display = "inline";
}, 1500);

// Modal Close
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  console.log("click working");
});

// Change modal text
consentForm.addEventListener("submit", (event) => {
  event.preventDefault();
  modalText.innerHTML = `<div class=modal-inner-loading><img src=images/loading.svg><p id=uploadingText>Uploading your data to the dark web...</p></div>`;

  setTimeout(() => {
    document.getElementById("uploadingText").textContent = `Making the sale..`;
  }, 1500);
});
