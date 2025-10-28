// Main Variables
let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
let listItems = "";
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
let deleteBtn = document.getElementById("delete-btn");

//Elements
let saveButton = document.getElementById("input-btn");
let inputEl = document.getElementById("input-el");
let ulEl = document.getElementById("ul-el");

//Verify leads from localstorage
if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
  console.log("leads detected in storage");
} else {
  console.log("no leads available");
}

//Event Listeners

// Save Button
saveButton.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
});

// Delete Button
deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = "";
  render(myLeads);
  console.log("Localstorage Cleared");
});

// Log out the items in the myLeads array using a for loop
function render(leads) {
  let listItems = ""; // Reset listItems each time
  for (let i = 0; i < leads.length; i++) {
    listItems += `<li>
                    <a href="${leads[i]}" target="_blank">
                      ${leads[i]}
                    </a>
                  </li>`;
  }
  ulEl.innerHTML = listItems;
}
