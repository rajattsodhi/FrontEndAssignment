
//http://codereview.stackexchange.com/questions/13111/smooth-page-scrolling-in-javascript
smoothScrollTo = function (target, duration) {
  //var timer, start, factor;
  
    var timer, start, factor;
      var offset = window.pageYOffset,
        delta  = target - window.pageYOffset; // Y-offset difference
    duration = duration || 1000;              // default 1 sec animation
    start = Date.now();                       // get start time
    factor = 0;
    console.log(timer);
    if( timer ) {
      clearInterval(timer); // stop any running animations
    }
    
    function step() {
      var y;
      factor = (Date.now() - start) / duration; // get interpolation factor
      console.log(factor);
      if( factor >= 1 ) {
        clearInterval(timer); // stop animation
        factor = 1;           // clip to max 1.0
      } 
      y = factor * delta + offset;
      window.scrollBy(0, y - window.pageYOffset);
    }
    
    timer = setInterval(step, 10);
    return timer;
  };



document.getElementById("portfolio-link").onclick = function() {
   var elmnt = document.getElementById("portfolio");   
   //scrollTo(document.body, elmnt.offsetTop-50, 500);
    smoothScrollTo(elmnt.offsetTop-50,500);
}