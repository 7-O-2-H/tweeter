let maxChars = 140;

$(document).ready(function() {

  const counter = $('.counter[name=counter]');
  const newTweetInput =  $('.new-tweet textarea');
  
  newTweetInput.on('input', function() {
    const charLength = $(this).val().length;
    counter.val(maxChars - charLength);
    if(counter.val() < 0) {
      counter.css("color", "red");
    } else {
    counter.css("color", "#545149");
    }
  });

});