const createTweetElement = (data) => {
  return `
  <article class="tweet">  
    <header class="user-info">
      <div>${data.user.name}</div>
      <div>${data.user.handle}</div>
    </header> 
    <p class="tweet-text">${data.content.text}</p> 
    <footer class="clickable-actions">
      <div class="t-since-posted">${data.created_at}</div>
      <div class="clickables">
        <i class="fa-solid fa-flag"></i>
        <i class="fa-solid fa-retweet"></i>
        <i class="fa-regular fa-heart"></i>
      </div>
    </footer>
  </article>
  `;
}


$(document).ready(function() {

  const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
      },
    "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
    "created_at": 1461116232227
  }



  const $tweet = createTweetElement(tweetData);
  console.log($tweet); // to see what it looks like
  $('.tweets-container').append($tweet);  

});