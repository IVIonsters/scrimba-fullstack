import { tweetsData } from "./data.js";

const tweetInput = document.getElementById("tweet-input");
const tweetBtn = document.getElementById("tweet-btn");

tweetBtn.addEventListener("click", function () {
  console.log(tweetInput.value);
});

document.addEventListener("click", function (e) {
  let truthyCheck = e.target.dataset.like;
  if (truthyCheck) {
    handleLikeClick(truthyCheck);
  } else {
    console.log("No value returned");
  }
});

function handleLikeClick(tweetId) {
  const filteredData = tweetsData.filter(function (tweet) {
    return tweet.uuid === tweetId;
  });
  const targetTweetObj = filteredData[0];
  targetTweetObj.likes++;
  console.log(targetTweetObj);
  render();
}

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
            <span class="tweet-detail"><i class="fa-regular fa-comment-dots" data-reply=${tweets.uuid}></i>${tweets.replies.length}</span>
            <span class="tweet-detail"><i class="fa-solid fa-heart" data-like=${tweets.uuid}></i>${tweets.likes}</span>
            <span class="tweet-detail"><i class="fa-solid fa-retweet" data-retweet=${tweets.uuid}></i>${tweets.retweets}</span>
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
  document.getElementById("feed").innerHTML = getFeedHtml();
  console.log("Tweets Rendered");
}

// call render
render();
