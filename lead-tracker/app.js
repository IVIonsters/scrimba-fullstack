// Main Variables
let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
let listItems = "";

//Elements
let saveButton = document.getElementById("input-btn");
let inputEl = document.getElementById("input-el");
let ulEl = document.getElementById("ul-el");
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

//Verify leads from localstorage
if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  renderLeads();
  console.log("leads detected in storage");
} else {
  console.log("no leads available");
}

//Event Listeners
saveButton.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  renderLeads();
});

// Log out the items in the myLeads array using a for loop
function renderLeads() {
  let listItems = ""; // Reset listItems each time
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `<li>
                    <a href="${myLeads[i]}" target="_blank">
                      ${myLeads[i]}
                    </a>
                  </li>`;
  }
  ulEl.innerHTML = listItems;
}
