$(document).ready(function() {
  
  const tweet = $('.tweet');

  tweet.on('mouseover', function() {
    tweet.css("box-shadow", "5px 5px 1px #545149");
  });
  tweet.on('mouseleave', function() {
    tweet.css("box-shadow", "none");
  });

  const flag = $('.fa-solid.fa-flag');
  const retweet = $('.fa-solid.fa-retweet');
  const heart = $('.fa-solid.fa-heart');

  flag.on('mouseover', function() {
    flag.css("color", "goldenrod");
  });
  flag.on('mouseleave', function() {
    flag.css("color", " #545149");
  });

  retweet.on('mouseover', function() {
    retweet.css("color", "goldenrod");
  });
  retweet.on('mouseleave', function() {
    retweet.css("color", " #545149");
  });

  heart.on('mouseover', function() {
    heart.css("color", "#C41E3A");
  });
  heart.on('mouseleave', function() {
    heart.css("color", " #545149");
  });

});