//Grab Elements
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("modal-close-btn");

// set modal display time
setTimeout(() => {
  modal.style.display = "inline";
}, 1500);

// Modal Close
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  console.log("click working");
});
