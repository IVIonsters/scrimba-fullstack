let fighters = [
  "🐉",
  "🐥",
  "🐊",
  "💩",
  "🦍",
  "🐢",
  "🐩",
  "🦭",
  "🦀",
  "🐝",
  "🤖",
  "🐘",
  "🐸",
  "🕷",
  "🐆",
  "🦕",
  "🦁",
];

let stageEl = document.getElementById("stage");
let fightButton = document.getElementById("fightButton");

fightButton.addEventListener("click", function () {
  //Generate Fighters
  let randomFighter1 = Math.floor(Math.random() * fighters.length);
  let randomFighter2 = Math.floor(Math.random() * fighters.length);

  //Display Fighters
  stageEl.innerText =
    fighters[randomFighter1] + " VS " + fighters[randomFighter2];
});
