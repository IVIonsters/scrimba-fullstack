// Main Variables
let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];

//Elements
let saveButton = document.getElementById("input-btn");
let inputEl = document.getElementById("input-el");
let ulEl = document.getElementById("ul-el");

//Event Listeners
saveButton.addEventListener("click", function () {
  myLeads.push(inputEl.value);
});

// Log out the items in the myLeads array using a for loop

for (i = 0; i < myLeads.length; i++) {
  ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";
}
