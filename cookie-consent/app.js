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

  // Grab form data
  const consentFormData = new FormData(consentForm);

  //User Display
  const name = consentFormData.get("userName");
  console.log("The response from the form is:", name);

  modalText.innerHTML = `<div class=modal-inner-loading><img src=images/loading.svg><p id=uploadingText>Uploading your data to the dark web...</p></div>`;

  setTimeout(() => {
    document.getElementById("uploadingText").textContent = `Making the sale..`;
  }, 1500);

  setTimeout(() => {
    document.getElementById(
      "modal-inner"
    ).innerHTML = `<h2>Thanks <span class="modal-display-name">${name}</span> you sucker!</h2>
    <p>We just sold the rights to your eternal soul.</p>
    <div class="idiot-gif">
      <img src="images/pirate.gif">
      </div>`;
  }, 3000);
});
