const renderTweets = (tweetData) => {
  tweetData.forEach(userInfo => {
    $('.tweets-container').prepend(createTweetElement(userInfo));
  });
};

const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

const createTweetElement = (data) => {
  const posted = timeago.format(data.created_at, "en_US");

  return `
    <article class="tweet">  
      <header class="user-info">
        <section class="image-name">
          <div class="avatar"><img src= ${data.user.avatars}></div>
          <div class="user-name">${data.user.name}</div>
        </section>
        <div>${data.user.handle}</div>
      </header> 
      <p class="tweet-text">${escape(data.content.text)}</p> 
      <footer class="clickable-actions">
        <div class="t-since-posted">${posted}</div>
        <div class="clickables">
          <i class="fa-solid fa-flag"></i>
          <i class="fa-solid fa-retweet"></i>
          <i class="fa-solid fa-heart"></i>
        </div>
      </footer>
    </article>
  `;
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

const addToFeed = () => {
  $.ajax({
    method: "GET",
    url: "/tweets"
  })
    .then(function(data) {
      $('.tweet-container').prepend(createTweetElement(data[data.length - 1]));
    });
};


$(document).ready(function() {

  loadTweets();

  $('.post-tweet').on('submit', function(event) {
    event.preventDefault();
    const input = $('#tweet-text').serialize();
    const tweetLength = $('#tweet-text').val().length;

    if (tweetLength) {
      $(".error-message").slideUp();
    }

    if (tweetLength > 140) {
      $(".error-message").text("You can't exceed 140 characters!").slideDown();
      return;
    }

    if (tweetLength === 0) {
      $(".error-message").text("You haven't entered any text!").slideDown();
      return;
    }

    $.ajax({
      method: "POST",
      url: '/tweets',
      data: input,
    })
    .then(function() {
      addToFeed();
      $("#tweet-text").val("");
      $(".counter").val(140);
    });

  });

});


