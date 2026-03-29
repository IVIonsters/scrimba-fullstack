import { tweetsData } from "./data.js";

const tweetInput = document.getElementById("tweet-input");
const tweetBtn = document.getElementById("tweet-btn");

tweetBtn.addEventListener("click", function () {
  console.log(tweetInput.value);
});

document.addEventListener("click", function (e) {
  if (e.target.dataset.like) {
    handleLikeClick(e.target.dataset.like);
  }
  if (e.target.dataset.retweet) {
    handleRetweetClick(e.target.dataset.retweet);
  } else {
    console.error("No value targeted");
  }
});

function handleLikeClick(tweetId) {
  const filteredData = tweetsData.filter(function (tweet) {
    return tweet.uuid === tweetId;
  });
  const targetTweetObj = filteredData[0];
  if (targetTweetObj.isLiked) {
    targetTweetObj.likes--;
  } else {
    targetTweetObj.likes++;
  }
  targetTweetObj.isLiked = !targetTweetObj.isLiked;

  console.log(targetTweetObj);

  render();
}

function handleRetweetClick(tweetId) {
  const filteredData = tweetsData.filter(function (tweet) {
    return tweet.uuid === tweetId;
  });
  const targetTweetObj = filteredData[0];
  if (targetTweetObj.isRetweeted) {
    targetTweetObj.retweets--;
  } else {
    targetTweetObj.retweets++;
  }
  targetTweetObj.isRetweeted = !targetTweetObj.isRetweeted;
  render();
}

function getFeedHtml() {
  let feedHtml = "";

  tweetsData.forEach(function (tweets) {
    //Liked Color Status
    let likeIconClass = "";
    if (tweets.isLiked == true) {
      likeIconClass = "liked";
    }

    //Retweet Color Status
    let retweetIconClass = "";
    if (tweets.isRetweeted == true) {
      retweetIconClass = "retweeted";
    }

    //Replies Logic
    let repliesHtml = "";

    //Tweet Reply Display
    if (tweets.replies.length > 0) {
      tweets.replies.forEach(function (reply) {
        repliesHtml += `<div class="tweet-reply">
      <div class="tweet-inner">
          <img src="${reply.profilePic}" class="profile-pic">
              <div>
                  <p class="handle">${reply.handle}</p>
                  <p class="tweet-text">${reply.tweetText}</p>
              </div>
          </div>
      </div>`;
      });
    }

    //Generate Display HTML
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
            <span class="tweet-detail"><i class="fa-solid fa-heart ${likeIconClass}" data-like=${tweets.uuid}></i>${tweets.likes}</span>
            <span class="tweet-detail"><i class="fa-solid fa-retweet ${retweetIconClass}" data-retweet=${tweets.uuid}></i>${tweets.retweets}</span>
          </div>
        </div>
      </div>
          <div id="replies-${tweets.uuid}">
        ${repliesHtml}
          </div>   
    </div>`;

    feedHtml += tweetHtml;
    // console.log(feedHtml);
  });
  return feedHtml;
}

function render() {
  document.getElementById("feed").innerHTML = getFeedHtml();
  // console.log("Tweets Rendered");
}

// call render
render();
