import { catsData } from "./data.js";

//Grab Needed Elements
const emotionRadios = document.getElementById("emotion-radios");

//Event Listeners
emotionRadios.addEventListener("change", highlightCheckedOptions);

// Accent Radio Function
function highlightCheckedOptions(e) {
  document.getElementById(e.target.id).classList.add("highlight");
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

renderEmotionsRadios(catsData);
