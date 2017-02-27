/*javascript that allows to scroll to a particular section of the page by simulating the 
* smoothscrolling. This is achieved by calculating the distance between the current element
* and the target event, then using timing event the scroll position is constantly updated until
* the target element position is equal to the scroll position
*/

/*http://codereview.stackexchange.com/questions/13111/smooth-page-scrolling-in-javascript
* code modified by removing unnecessary parts
*/

/*function that take as parameters the target element and a duration (how long the animation should take)
*/
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
   
  /*the most important function that is responsible of doing the animation and updating the scroll position*/    
  function step() {
    var y;
    current = (Date.now() - start) / duration; // get current animation status (interpolation )
    //if current>1 animation is complete so stop it
    if( current >= 1 ) {
      clearInterval(timer);//stop animation 
      current = 1;//this is needed as the last animation will complete the function call (ie the next lines of code will still run)
    } 
    //calculate how the amount of scroll to scroll the window
    y = current * difference + origin;
    window.scrollBy(0, y - window.pageYOffset);//scroll the window (ie scrollbar is moved)
  }
    
  timer = setInterval(step, 10);//call the step function every  10 milliseconds
  return;
};


//attach listener to each link in the nav menu
document.getElementById("home-link").onclick = function() {
  var elmnt = document.getElementById("header");   
  smoothScrollTo(elmnt.offsetTop,500);
}
/*the following link requires to substract 50 from the position, this is due to the fact that the navigation is fixed and this
* will make the section title hidden by the navigation bar
*/
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
/*listener is also attached to the logo as after analysing user behaviour, the majority of user
* clicked on the logo expecting something to happen
*/
document.getElementById("logo").onclick = function() {
  var elmnt = document.getElementById("about");   
  smoothScrollTo(elmnt.offsetTop-50,500);
}