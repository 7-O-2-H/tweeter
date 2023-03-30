const createTweetElement = (data) => {

  return `
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
}

const renderTweets = (tweetData) => {
  tweetData.forEach(userInfo => {
    $('.tweets-container').prepend(createTweetElement(userInfo));
  });
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
    $('.tweet-container').prepend(createTweetElement(data[data.length - 1]));
  });
};


$(document).ready(function() {

  loadTweets();

  $('.post-tweet').on('submit', function (event) {
    event.preventDefault();
    const input = $('.new-tweet-text').val();
    const tweetLength = $('.new-tweet-text').val().length;

    $.ajax({
      method: "POST",
      action: '/tweets',
      data: input,
    })
    .then(function() {
      loadFeed();
    });
    // .catch(function (err) {
    //   console.log(err);
    // })

  });

});


