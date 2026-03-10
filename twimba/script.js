import { tweetsData } from "./data.js";

const tweetInput = document.getElementById("tweet-input");
const tweetBtn = document.getElementById("tweet-btn");

tweetBtn.addEventListener("click", function () {
  console.log(tweetInput.value);
});

function getFeedHtml() {
  let feedHtml = "";
  tweetsData.forEach(function (tweets) {
    let tweetHtml = `<div class="tweet">
      <div class="tweet-inner">
        <img
          src=${tweets.profilePic}
          class="profile-pic"
        ></img>
        <div>
          <p class="handle">${tweets.handle}</p>
          <p class="tweet-text">${tweets.tweetText}</p>
          <div class="tweet-details">
            <span class="tweet-detail">${tweets.replies.length}</span>
            <span class="tweet-detail">${tweets.likes}</span>
            <span class="tweet-detail">${tweets.retweets}</span>
          </div>
        </div>
      </div>
    </div>`;

    feedHtml += tweetHtml;
    // console.log(feedHtml);
  });
  return feedHtml;
}

function render() {
  render = document.getElementById("feed").innerHTML = getFeedHtml();
  console.log("Tweets Rendered");
}

// call render
render();
