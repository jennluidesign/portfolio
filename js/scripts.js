console.log("Hello world! Thanks for stopping by my portfolio site. Take a look around and let me know what you think - I'd love to hear from you!")

function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle') {
      x.className += ' responsive';
    } else {
      x.className = 'navtoggle';
    }
}
