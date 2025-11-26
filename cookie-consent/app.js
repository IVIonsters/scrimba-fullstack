//Grab Elements
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("modal-close-btn");
const modalText = document.getElementById("modal-text");
const consentForm = document.getElementById("consent-form");
const declineBtn = document.getElementById("declineBtn");
const buttons = document.getElementById("modal-choice-btn");

// set modal display time
setTimeout(() => {
  modal.style.display = "inline";
}, 1500);

// Modal Close
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  console.log("click working");
});

// Button Swap Event
declineBtn.addEventListener("mouseover", () => {
  buttons.classList.toggle("reverse");
  console.log("hovered");
});

/*   
Challenge: 
1. Take control of the div holding the buttons.
2. In index.css, set up a selector for a new class
   that uses flex-direction to reverse the order 
   of its child elements.
3. Toggle that class on the div holding the buttons 
   when a user's cursor hovers over the decline button.
*/

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

    closeBtn.disabled = false;
  }, 3000);
});
