
//http://codereview.stackexchange.com/questions/13111/smooth-page-scrolling-in-javascript
smoothScrollTo = function (target, duration) {
    var timer;//used to use timer event 
    var start;//used to store the starting value of the timer
    var current;//variable used to know where the animation is in relation to time 
    var origin = window.pageYOffset;//variable storing the current position
    var difference = target - window.pageYOffset; // difference from target and current position
    
    
    start = Date.now();//start timer
    current = 0;
    //in case animation is still running when new animation is submitted, stop previous running animation
    if( timer ) {
      clearInterval(timer);
    }
    
    function step() {
      var y;
      current = (Date.now() - start) / duration; // get current animation status (interpolation )
      //if current>1 animation is complete so stop it
      if( current >= 1 ) {
        clearInterval(timer);//stop animation 
        current = 1;//this is needed as the last animation will complete the function call (ie the following lines of code will still run)
          
      } 
      //calculate how much to scroll
      y = current * difference + origin;
      
      window.scrollBy(0, y - window.pageYOffset);
    }
    
    timer = setInterval(step, 10);
    return;
  };


document.getElementById("home-link").onclick = function() {
   var elmnt = document.getElementById("header");   
   smoothScrollTo(elmnt.offsetTop,500);
}
document.getElementById("portfolio-link").onclick = function() {
   var elmnt = document.getElementById("portfolio");   
   smoothScrollTo(elmnt.offsetTop-50,500);
}

document.getElementById("about-link").onclick = function() {
   var elmnt = document.getElementById("about");   
   smoothScrollTo(elmnt.offsetTop-50,500);
}
document.getElementById("education-link").onclick = function() {
   var elmnt = document.getElementById("education");   
   smoothScrollTo(elmnt.offsetTop-50,500);
}
document.getElementById("experience-link").onclick = function() {
   var elmnt = document.getElementById("experience");   
   smoothScrollTo(elmnt.offsetTop-50,500);
}
document.getElementById("awards-link").onclick = function() {
   var elmnt = document.getElementById("awards");   
   smoothScrollTo(elmnt.offsetTop-50,500);
}
document.getElementById("contact-link").onclick = function() {
   var elmnt = document.getElementById("contact");   
   smoothScrollTo(elmnt.offsetTop-50,500);
}