import { catsData } from "./data.js";

function getEmotionsArray(cats) {
  const emotionsArray = [];

  for (const cat of cats) {
    for (const emotion of cat.emotionTags) {
      emotionsArray.push(emotion);
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
      value="emotion"
      id="emotion"
      name="choice-emotion"
      >
      <label for="emotion">${emotion}</label>
    </div>`;
  }

  document.getElementById("emotion-radios").innerHTML = emotionsHTML;
  console.log(emotions);
}

renderEmotionsRadios(catsData);

/*
Challenge:
1. Swap out `<p>${emotion}</p>` for HTML
   that will render a radio input for each
   emotion. Remember to use "type", "id", 
   "value", and "name" properties on each radio.
   ("id" and "value" can both be set to the
   "emotion").
2. Remember to give each radio a label.
   (What property does a label need?)
3. Enclose each individual radio input in this div:
   <div class="radio">
      **RADIO HERE**
   </div>
*/
