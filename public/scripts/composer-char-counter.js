$(document).ready(function() {
    $("#tweet-text").keyup(function() {
      let charRemaining = document.getElementById('counter').innerHTML;
      const maxLength = 140;
      let currentLength = this.value.length;
      document.getElementById('counter').innerHTML = maxLength - currentLength;
    $(charRemaining).text(maxLength - currentLength)
      let element = document.getElementById("counter");
    let diff = Number (maxLength - currentLength);
        if(diff < 0) {
        element.classList.remove("black");
        element.classList.add("red");
        } else {
            element.classList.remove("red");
            element.classList.add("black");
      }
    })
  
  });