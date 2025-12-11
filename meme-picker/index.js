import { catsData } from "./data.js";

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
  let emotionsHTML = "";

  for (let emotion of emotions) {
    emotionsHTML += `
    <div class="radio">
      <input
      type="radio"
      value="${emotion}"
      id="${emotion}"
      name="choice-emotion"
      >
      <label for="emotion">${emotion}</label>
    </div>`;
  }

  document.getElementById("emotion-radios").innerHTML = emotionsHTML;
  console.log(emotions);
}

renderEmotionsRadios(catsData);
