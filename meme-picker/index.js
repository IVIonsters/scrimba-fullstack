import { catsData } from "./data.js";

//Grab Needed Elements
const emotionRadios = document.getElementById("emotion-radios");
const getImage = document.getElementById("get-image-btn");

//Event Listeners
emotionRadios.addEventListener("change", highlightCheckedOptions);
getImage.addEventListener("click", getMatchingCatsArray);

// Accent Radio Function
function highlightCheckedOptions(e) {
  const radioSelect = document.getElementsByClassName("radio");
  for (let radio of radioSelect) {
    radio.classList.remove("highlight");
  }
  document.getElementById(e.target.id).parentElement.classList.add("highlight");
  return radioSelect;
}

function getEmotionsArray(cats) {
  const emotionsArray = [];

  for (const cat of cats) {
    for (const emotion of cat.emotionTags) {
      if (!emotionsArray.includes(emotion)) {
        emotionsArray.push(emotion);
      } else {
        console.log("Duplicates Removed");
      }
    }
  }
  return emotionsArray;
}

function renderEmotionsRadios(cats) {
  const emotions = getEmotionsArray(cats);
  let emotionsHTML = ``;

  for (let emotion of emotions) {
    emotionsHTML += `
        <div class="radio">
            <label for="${emotion}">${emotion}</label>
            <input
            type="radio"
            id="${emotion}"
            value="${emotion}"
            name="emotions"
            >
        </div>`;
  }

  emotionRadios.innerHTML = emotionsHTML;
}

// getMatchingCats
function getMatchingCatsArray() {
  const checkedRadio = document.querySelector('input[name="emotions"]:checked');
  if (checkedRadio === null) {
    console.log("No emotion selected...try again");
  } else {
    console.log("User Selected:", checkedRadio.value);
  }
}

renderEmotionsRadios(catsData);
