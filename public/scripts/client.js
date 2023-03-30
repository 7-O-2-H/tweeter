const createTweetElement = (data) => {
  let $tweet = `
  <article class="tweet">  
    <header class="user-info">
      <section class="image-name">
        <div class="avatar"><img src= ${data.user.avatars}></div>
        <div class="user-name">${data.user.name}</div>
      </section>
      <div>${data.user.handle}</div>
    </header> 
    <p class="tweet-text">${data.content.text}</p> 
    <footer class="clickable-actions">
      <div class="t-since-posted">${data.created_at}</div>
      <div class="clickables">
        <i class="fa-solid fa-flag"></i>
        <i class="fa-solid fa-retweet"></i>
        <i class="fa-solid fa-heart"></i>
      </div>
    </footer>
  </article>
  `;
  return $tweet;
}

const renderTweets = (tweetData) => {
  for (const tweet of tweetData) {
    $('.tweets-container').append(createTweetElement(tweet));
  }
};

const loadTweets = function() {
  $.ajax({
    method: "GET",
    url: "/tweets"
  })
  .then(function(data) {
    renderTweets(data);
  });
};

const loadFeed = () => {
  $.ajax({
    method: "GET",
    url: "/tweets",
  })
  .then(function(data) {
    console.log(data);
    $('.tweet-container').prepend(createTweetElement(data[data.length - 1]))
  });
};


$(document).ready(function() {

  // const data = [
  //   {
  //     "user": {
  //       "name": "Newton",
  //       "avatars": "https://i.imgur.com/73hZDYK.png"
  //       ,
  //       "handle": "@SirIsaac"
  //     },
  //     "content": {
  //       "text": "If I have seen further it is by standing on the shoulders of giants"
  //     },
  //     "created_at": 1461116232227
  //   },
  //   {
  //     "user": {
  //       "name": "Descartes",
  //       "avatars": "https://i.imgur.com/nlhLi3I.png",
  //       "handle": "@rd" },
  //     "content": {
  //       "text": "Je pense , donc je suis"
  //     },
  //     "created_at": 1461113959088
  //   }
  // ]

  //renderTweets(data);

  $('.post-tweet').on('submit', function (event) {
    event.preventDefault();
    const input = $('.new-tweet-text').val();
    const tweetLength = $('.new-tweet-text').val().length;
    console.log(input);

    $.ajax({
      method: "POST",
      action: '/tweets',
      data: input,
    })
    .then(function(data) {
      loadFeed(data);
    })
    .catch(function (err) {
      console.log(err);
    })

  })

});


