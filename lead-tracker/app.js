// Main Variables
let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
let listItems = "";

//Elements
let saveButton = document.getElementById("input-btn");
let inputEl = document.getElementById("input-el");
let ulEl = document.getElementById("ul-el");

//Event Listeners
saveButton.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  renderLeads();
  inputEl.value = "";
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

// Wrap the lead in an anchor tag (<a>) inside the <li>
// Can you make the link open in a new tab?
